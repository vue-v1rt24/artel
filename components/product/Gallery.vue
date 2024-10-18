<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//
defineProps<{
  images: { mediaItemUrl: string }[];
}>();

//
onMounted(() => {
  const thumbsSwiper = new Swiper('.swiper_little_image', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    direction: 'vertical',
    loop: true,
    watchSlidesProgress: true,
  });

  /*  */

  new Swiper('.swiper_big_image', {
    modules: [Navigation, Thumbs, Pagination],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-product-button-next',
      prevEl: '.swiper-product-button-prev',
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
});
</script>

<template>
  <div class="gallery">
    <div class="swiper swiper_big_image">
      <div class="swiper-wrapper">
        <div v-for="image in images" :key="image.mediaItemUrl" class="swiper-slide">
          <div class="swiper_big_image_img">
            <NuxtImg :src="image.mediaItemUrl" format="avif, webp" densities="x1" />
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
        <div v-for="image in images" :key="image.mediaItemUrl" class="swiper-slide">
          <div class="swiper_little_image_bx">
            <NuxtImg
              :src="image.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              class="swiper_little_image__img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gallery {
  width: 785px;
  height: 581px;
  display: flex;
  flex-direction: row-reverse;
  column-gap: 30px;

  /*  */
  @media (max-width: 1440px) {
    width: fit-content;
  }
}

/* ======== Большой слайдер */
.swiper_big_image {
  width: 581px;
  background-color: var(--low-green);
  border-radius: 32px;
}

/*  */
.swiper_big_image_img {
  height: 581px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  /*  */
  /* @media (max-width: 1400px) {
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
  } */
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

/* @media (max-width: 1400px) {
  .swiper_little_image::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 1) 100%
    );
  }
} */

/* @media (max-width: 768px) {
  .swiper_little_image::before {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    );
  }
} */

/* @media (max-width: 576px) {
  .swiper_little_image::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 1) 100%
    );
  }
} */

/*  */
.swiper_little_image .swiper-wrapper {
  padding-top: 93px;

  /*  */
  /* @media (max-width: 1400px) {
    padding-top: 0;
  } */
}

.swiper_little_image .swiper-slide {
  width: 174px;
  height: 174px;

  /*  */
  /* @media (max-width: 768px) {
    width: 149px;
    height: 149px;
  } */
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
  /* @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    background-size: 56px;
    margin-top: -105px;
  }

  @media (max-width: 576px) {
    display: none;
  } */
}

.swiper-product-button-prev {
  left: 32px;
  rotate: 180deg;
}

.swiper-product-button-next {
  right: 32px;
}

/*  */
.product_pagination {
  bottom: 30px;
}
</style>
