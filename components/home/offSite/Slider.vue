<script setup lang="ts">
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

//
defineProps<{
  sliders: { id: number; img: string }[];
}>();

//
const swiper = ref<Swiper>();

//
onMounted(() => {
  swiper.value = new Swiper('.off_slider', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 12,
    centeredSlides: true,
    direction: 'vertical',
    autoplay: {
      delay: 1000,
    },
    loop: true,

    breakpoints: {
      320: {
        direction: 'horizontal',
        centeredSlides: true,
        spaceBetween: 10,
      },
      577: {
        direction: 'vertical',
      },
      769: {
        direction: 'horizontal',
        centeredSlides: false,
        spaceBetween: 24,
      },
      1401: {
        direction: 'vertical',
      },
    },
  });
});

onUnmounted(() => {
  if (swiper.value && swiper.value.destroy) {
    swiper.value.destroy();
  }
});
</script>

<template>
  <div class="off_slider swiper">
    <div class="swiper-wrapper">
      <div v-for="slider in sliders" :key="slider.id" class="swiper-slide">
        <div class="off_slider__img_bx">
          <NuxtImg :src="slider.img" densities="x1" format="avif, webp" class="off_slider__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.off_slider {
  width: 174px;
  height: 100%;
  margin: 0;

  /*  */
  @media (max-width: 1400px) {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 174px;
  }

  @media (max-width: 768px) {
    position: relative;
    height: 100%;
  }

  @media (max-width: 576px) {
    height: 150px;
    margin-bottom: 18px;
  }
}

.off_slider::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 10;
}

@media (max-width: 1400px) {
  .off_slider::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 1) 100%
    );
  }
}

@media (max-width: 768px) {
  .off_slider::before {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    );
  }
}

@media (max-width: 576px) {
  .off_slider::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 1) 100%
    );
  }
}

/*  */
.swiper-wrapper {
  padding-top: 93px;

  /*  */
  @media (max-width: 1400px) {
    padding-top: 0;
  }
}

.swiper-slide {
  width: 174px;
  height: 174px;

  /*  */
  @media (max-width: 768px) {
    width: 149px;
    height: 149px;
  }
}

.off_slider__img_bx {
  background-color: var(--low-green);
  border-radius: 20px;
}

.off_slider__img {
  mix-blend-mode: darken;
}
</style>
