<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui';

import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//
const {
  id,
  btn = true,
  loop = false,
  autoplay = false,
  delay = 3000,
  pauseOnMouseEnter = false,
} = defineProps<{
  id: string;
  gallery: {
    mediaItemUrl: string;
  }[];
  title?: string;
  desc?: string;
  btn?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
  pauseOnMouseEnter?: boolean;
}>();

/* Параметры defineProps:

gallery: массив изображений
title: Заголовок;
desc: Описание;
btn: Показ / Скрытие кнопок переключения;
loop: Цикл;
autoplay: Автоматический запуск;
delay: Время переключения слайда;
pauseOnMouseEnter: По наведению останавливает автоматическое переключение слайдера;
*/

//
const swiper = ref<Swiper>();
const isLoadSlideFancybox = ref(false);

//
onMounted(async () => {
  swiper.value = new Swiper(`.swiper-${id}`, {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: '30',
    loop,
    autoplay: {
      delay,
      pauseOnMouseEnter,
    },
    navigation: {
      nextEl: '.swiper-popular-button-next',
      prevEl: '.swiper-popular-button-prev',
    },
    breakpoints: {
      360: {
        spaceBetween: 20,
      },
      577: {
        spaceBetween: 30,
      },
    },
  });

  // Если не передаём параметр, то авто переключения не будет
  if (swiper.value && !autoplay) {
    swiper.value.autoplay.stop();
  }

  // Открытие изображения в модальном окне
  await nextTick();
  Fancybox.bind(`[data-fancybox="gallery-${id}"]`, {
    Thumbs: false,
    Hash: false,
    Toolbar: {
      display: {
        left: [''],
        middle: [],
        right: ['close'],
      },
    },
    on: {
      loading() {
        if (!isLoadSlideFancybox.value && (isLoadSlideFancybox.value = true)) {
          swiper.value?.autoplay.pause();
        }
      },
      shouldClose() {
        swiper.value?.autoplay.resume();
        isLoadSlideFancybox.value = false;
      },
    },
  });
});

//
onUnmounted(() => {
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }

  if (swiper.value && swiper.value.destroy) {
    swiper.value.destroy();
  }
});
</script>

<template>
  <div class="popular_bx">
    <div class="popular__title container">
      <div v-if="title" class="heading">
        <h2 class="h2_56">{{ title }}</h2>
        <p v-if="desc" class="p_20">{{ desc }}</p>
      </div>

      <!--  -->
      <template v-if="btn">
        <div class="swiper-btn swiper-popular-button-prev"></div>
        <div class="swiper-btn swiper-popular-button-next"></div>
      </template>
    </div>

    <!--  -->
    <div :class="[`swiper-${id}`, 'popular_swiper', 'swiper']">
      <div class="swiper-wrapper sdvig">
        <div v-for="image in gallery" :key="image?.mediaItemUrl" class="swiper-slide">
          <div
            class="swiper_slide_img border_img_bx"
            :data-fancybox="`gallery-${id}`"
            :data-src="image?.mediaItemUrl"
          >
            <NuxtImg
              :src="image?.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              sizes="378px s1280:378px s768:380px s576:329px s360:320px"
              loading="lazy"
              alt=""
            />

            <img class="border_img" src="/images/border.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.popular__title {
  display: flex;
  margin-bottom: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }

  /*  */
  .heading {
    margin-right: 50px;

    /*  */
    @media (max-width: 576px) {
      margin-right: 0;
    }
  }

  /*  */
  .h2_56 {
    max-width: 972px;

    /*  */
    @media (max-width: 576px) {
      max-width: 100%;
    }
  }

  /*  */
  .p_20 {
    max-width: 635px;
    margin-top: 42px;

    /*  */
    @media (max-width: 1280px) {
      margin-top: 32px;
    }

    @media (max-width: 768px) {
      margin-top: 24px;
    }

    @media (max-width: 576px) {
      max-width: 100%;
      margin-top: 18px;
    }
  }
}

/*  */
.popular_bx {
  overflow: hidden;
}

.popular_swiper {
  @media (min-width: 1681px) {
    /* padding: 0 50%; */
    /* margin: 0 -803px; */
    padding-left: 50%;
    /* padding-right: 40px; */
    margin-left: -803px;
  }

  @media (max-width: 1680px) {
    padding: 0 40px;
    margin: auto;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
}

/*  */
.swiper-slide {
  width: 378px;

  /*  */
  @media (max-width: 1280px) {
    width: 380px;
  }

  @media (max-width: 768px) {
    width: 329px;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
}

/*  */
.swiper_slide_img {
  border-radius: 20px;
  overflow: hidden;
}

/*  */
.border_img_bx {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: filter var(--transition-speed);
}

.border_img_bx::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 45, 45, 0.6);
  opacity: 0;
  transition: opacity var(--transition-speed);
}

@media (hover: hover) {
  .border_img_bx:hover::before {
    opacity: 1;
  }
}

.border_img {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  opacity: 0;
  transition: opacity var(--transition-speed);

  /*  */
  @media (hover: hover) {
    .border_img_bx:hover & {
      opacity: 1;
    }
  }
}

/*  */
.swiper-btn {
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
  }

  @media (max-width: 576px) {
    display: none;
  }
}

.swiper-popular-button-prev {
  rotate: y 180deg;
  margin: 0 42px 0 auto;
}
</style>
