<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Fancybox } from '@fancyapps/ui';

//
defineProps<{
  images: { mediaItemUrl: string }[];
}>();

//
const viewport = useViewport();

//
const thumbsSwiper = ref<Swiper>();
const bigSwiper = ref<Swiper>();

//
onMounted(async () => {
  thumbsSwiper.value = new Swiper('.swiper_little_image', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    direction: 'vertical',
    loop: true,

    breakpoints: {
      360: {
        loop: false,
        init: false,
      },
      577: {
        direction: 'horizontal',
      },
      901: {
        direction: 'vertical',
      },
    },
  });

  /*  */

  bigSwiper.value = new Swiper('.swiper_big_image', {
    modules: [Navigation, Thumbs, Pagination],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-product-button-next',
      prevEl: '.swiper-product-button-prev',
    },
    thumbs: {
      swiper: thumbsSwiper.value,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  //
  await nextTick();
  Fancybox.bind('.swiper_big_image_img', {
    Thumbs: false,
    Hash: false,
    Toolbar: {
      display: {
        left: [''],
        middle: [],
        right: ['close'],
      },
    },
  });
});

onUnmounted(() => {
  if (thumbsSwiper.value && thumbsSwiper.value.destroy) {
    thumbsSwiper.value.destroy();
  }

  if (bigSwiper.value && bigSwiper.value.destroy) {
    bigSwiper.value.destroy();
  }

  //
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }
});
</script>

<template>
  <div class="gallery_product">
    <div class="swiper swiper_big_image">
      <div class="swiper-wrapper">
        <div v-for="image in images" :key="image?.mediaItemUrl" class="swiper-slide">
          <div class="swiper_big_image_img border_img_bx" :data-src="image?.mediaItemUrl">
            <NuxtImg :src="image?.mediaItemUrl" format="avif, webp" densities="x1" />

            <NuxtImg class="border_img" src="/images/border.svg" />
          </div>
        </div>
      </div>
      <!--  -->
      <div class="swiper-btn swiper-product-button-next"></div>
      <div class="swiper-btn swiper-product-button-prev"></div>

      <!--  -->
      <div class="product_pagination swiper-pagination"></div>
    </div>

    <!--  -->

    <div class="swiper swiper_little_image">
      <div class="swiper-wrapper">
        <template v-if="viewport.isGreaterOrEquals('screen576')">
          <div v-for="image in images" :key="image?.mediaItemUrl" class="swiper-slide">
            <div class="swiper_little_image_bx">
              <NuxtImg
                :src="image?.mediaItemUrl"
                format="avif, webp"
                densities="x1"
                class="swiper_little_image__img"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gallery_product {
  height: 581px;
  display: flex;
  flex-direction: row-reverse;
  column-gap: 30px;

  /*  */
  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
}

/* ======== Большой слайдер */
.swiper_big_image {
  width: 581px;
  background-color: var(--low-green);
  border-radius: 32px;

  /*  */
  @media (max-width: 1200px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

/*  */
.swiper_big_image_img {
  height: 581px;
  display: flex;
  justify-content: center;
  align-items: center;

  /*  */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 50px;
  }

  @media (max-width: 576px) {
    padding: 23px;
  }
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

/* ======== Мини слайдер */
.swiper_little_image {
  width: 174px;
  height: 100%;
  margin: 0;

  /*  */
  @media (max-width: 1440px) {
    display: none;
  }

  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 174px;
    display: block;
    margin-top: 24px;
  }

  @media (max-width: 576px) {
    display: none;
  }
}

.swiper_little_image::before {
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
  pointer-events: none;
}

@media (max-width: 768px) {
  .swiper_little_image::before {
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
.swiper_little_image .swiper-slide {
  width: 174px;
  height: 174px;
}

.swiper_little_image .swiper_little_image_bx {
  background-color: var(--low-green);
  border-radius: 20px;

  /*  */
  .swiper-slide-thumb-active & {
    background-color: rgba(23, 45, 45, 0.1);
  }
}

.swiper_little_image .swiper_little_image__img {
  mix-blend-mode: darken;
}

/*  */
.swiper-product-button-prev,
.swiper-product-button-next {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  width: 56px;
  height: 56px;
  filter: brightness(1.5);
  z-index: 1;

  /*  */
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    background-size: 48px;
  }

  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
    background-size: 30px;
  }
}

.swiper-product-button-prev {
  left: 32px;
  rotate: 180deg;

  /*  */
  @media (max-width: 768px) {
    left: 24px;
  }

  @media (max-width: 576px) {
    left: 14px;
  }
}

.swiper-product-button-next {
  right: 32px;

  /*  */
  @media (max-width: 768px) {
    right: 24px;
  }

  @media (max-width: 576px) {
    right: 14px;
  }
}

/*  */
.gallery_product .product_pagination {
  bottom: 23px;
  display: none;

  /*  */
  @media (max-width: 1440px) {
    display: block;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 576px) {
    display: block;
  }
}
</style>
