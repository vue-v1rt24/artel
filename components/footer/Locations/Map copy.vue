<script setup lang="ts">
import type {} from '@yandex/ymaps3-types';
import settingsMap from '~/components/footer/Locations/mapSettings.json';
import balloonPath from '~/public/images/balloon.svg';

//
const { apiYandexCardKey } = useRuntimeConfig().public;

//
const { czentrKarty, coords, coordsMix } = defineProps<{
  czentrKarty: string;
  coords: string;
  coordsMix: string;
}>();

//
useHead({
  script: [
    { src: `https://api-maps.yandex.ru/v3/?apikey=${apiYandexCardKey}&lang=ru_RU`, defer: true },
  ],
});

//
let map: any = null;
const cooredsCzentrKarty = JSON.parse(czentrKarty);
const centerMap = JSON.parse(coords);
const coordsBalloonMix = JSON.parse(coordsMix);

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

  // Иницилиазируем карту
  map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('map')!,

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [cooredsCzentrKarty[1], cooredsCzentrKarty[0]],

        // Уровень масштабирования
        zoom: 10,
      },
      showScaleInCopyrights: true,
    },
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: settingsMap as [],
    }),
  );

  /////////////////////////////

  // Добавьте слой для маркеров
  map.addChild(new YMapDefaultFeaturesLayer({}));

  // Создайте DOM-элемент для содержимого маркера.
  // Важно это сделать до инициализации маркера!
  // Элемент можно создавать пустым. Добавить HTML-разметку внутрь можно после инициализации маркера.
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  const balloon2 = document.createElement('div');
  balloon2.classList.add('balloon');

  const img = document.createElement('img');
  img.src = balloonPath;
  img.alt = '';

  const img2 = document.createElement('img');
  img2.src = balloonPath;
  img2.alt = '';

  // Добавьте произвольную HTML-разметку внутрь содержимого маркера
  balloon.append(img);
  balloon2.append(img2);

  // Инициализируйте маркер
  const marker = new YMapMarker(
    {
      coordinates: [centerMap[1], centerMap[0]],
    },
    balloon,
  );

  const marker2 = new YMapMarker(
    {
      coordinates: [coordsBalloonMix[1], coordsBalloonMix[0]],
    },
    balloon2,
  );

  // Добавьте маркер на карту
  map.addChild(marker);
  map.addChild(marker2);
}

//
onMounted(() => {
  initMap();
});

//
onUnmounted(() => {
  if (map && map.destroy) {
    map.destroy();
  }
});
</script>

<template>
  <div id="map" class="map"></div>
</template>

<style lang="css" scoped>
.map {
  width: 100%;
  max-width: 785px;
  height: 531px;
  border-radius: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 1280px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    height: 480px;
  }

  @media (max-width: 576px) {
    height: 320px;
    border-radius: 14px;
  }
}

/*  */
:global(.balloon) {
  width: 69px;
  height: 79px;

  /*  */
  @media (max-width: 576px) {
    width: 34px;
    height: 42px;
  }
}
</style>
