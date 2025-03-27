<script setup lang="ts">
import type {} from '@yandex/ymaps3-types';
import { type YMapDefaultMarkerProps } from '@yandex/ymaps3-default-ui-theme';
import settingsMap from '~/components/footer/Locations/mapSettings.json';

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
  await ymaps3.ready;

  await ymaps3.import.registerCdn(
    'https://cdn.jsdelivr.net/npm/{package}',
    '@yandex/ymaps3-default-ui-theme@0.0.2',
  );

  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  map = new YMap(document.getElementById('map')!, {
    location: {
      center: [cooredsCzentrKarty[1], cooredsCzentrKarty[0]],
      zoom: 10,
    },
    showScaleInCopyrights: true,
  });

  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: settingsMap as [],
    }),
  );

  map.addChild(new YMapDefaultFeaturesLayer({}));

  const markerStavropol = new YMapDefaultMarker({
    coordinates: [centerMap[1], centerMap[0]],
    color: 'lightgreen',
    size: 'normal',
    iconName: 'fallback',
  } as YMapDefaultMarkerProps);
  map.addChild(markerStavropol);

  const markerMixailovsk = new YMapDefaultMarker({
    coordinates: [coordsBalloonMix[1], coordsBalloonMix[0]],
    color: 'lightgreen',
    size: 'normal',
    iconName: 'fallback',
  } as YMapDefaultMarkerProps);
  map.addChild(markerMixailovsk);
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
