<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { TypeSpecialOffers } from '~/types/sliderSpecialOffers.types';

defineProps<{
  specials: TypeSpecialOffers[];
}>();

//
onMounted(() => {
  const swiper = new Swiper('.special_swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,

    spaceBetween: 100,

    loop: true,

    speed: 1000,

    pagination: {
      el: '.swiper-special-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-special-button-next',
      prevEl: '.swiper-special-button-prev',
    },
  });

  //
});
</script>

<template>
  <div class="special">
    <h2 class="h2_56">Специальные предложения</h2>

    <NuxtImg class="special_figure" src="/images/special-figure.svg" densities="x1" />

    <!--  -->
    <div class="special_swiper swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="special in specials" :key="special.id">
          <NuxtImg
            class="special_swiper__img"
            format="avif, webp"
            :src="special.img"
            densities="x1"
          />

          <!--  -->
          <div class="special__info_bx">
            <div class="special__info">
              <div class="special__price_bx">
                <div class="special__price">
                  {{ numberFormatter(+special.price) }}
                </div>

                <div v-if="special.isOnSale" class="special_price__old_bx">
                  <s class="special_price__old">{{ numberFormatter(+special.regularPrice) }}</s>

                  <div class="sale_text">
                    Скидка {{ discountPercentage(+special.regularPrice, +special.salePrice) }}
                  </div>
                </div>
              </div>

              <div class="name_product">{{ special.title }}</div>
            </div>

            <!--  -->
            <UiButton
              width="278px"
              height="91px"
              title="Узнать подробнее"
              class="special__info_btn"
            />
          </div>
        </div>
      </div>

      <div class="swiper-special-pagination"></div>

      <div class="swiper-btn swiper-special-button-prev"></div>
      <div class="swiper-btn swiper-special-button-next"></div>

      <!--  -->
      <UiButton
        width="278px"
        height="91px"
        title="Узнать подробнее100"
        class="special__info_btn100"
      />
      <!--  -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.special {
  position: relative;
  /* height: 864px; */
}

/*  */
.special .h2_56 {
  position: absolute;
  top: 10px;
  left: 0;
}

/*  */
.special_figure {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  pointer-events: none;
}

/*  */
.special_swiper {
  height: 864px;
}

.special_swiper .swiper-slide {
  display: grid;
  place-content: center;
}

/*  */
.special_swiper__img {
  mix-blend-mode: darken;
}

/*  */
.special__info_bx {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/*  */
.special__price_bx {
  display: flex;
  align-items: center;
  column-gap: 24px;
}

.special__price {
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  color: var(--main-green);
}

.special_price__old_bx {
  display: flex;
  align-items: center;
  column-gap: 24px;
}

.special_price__old {
  font-weight: 300;
  font-size: 24px;
  line-height: 100%;
  color: var(--light-gray2);
}

.sale_text {
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  color: var(--main-green);
  background: var(--main--sand);
  border-radius: 20px;
  padding: 8px 10px;
}

/*  */
.name_product {
  max-width: 345px;
  font-weight: 300;
  font-size: 28px;
  line-height: 140%;
  color: var(--main-green);
  margin-top: 24px;
}

/*  */
.special__info_btn {
  margin-top: auto;
}

/*  */
.swiper-special-button-prev,
.swiper-special-button-next {
  position: absolute;
  top: 50%;
  width: 68px;
  height: 68px;
  z-index: 1;
}

.swiper-special-button-prev {
  left: 0;
  rotate: 180deg;
}

.swiper-special-button-next {
  right: 0;
}

/*  */
.swiper-special-pagination {
  position: absolute;
  top: 30px;
  left: auto;
  right: 0;

  width: fit-content;
  height: fit-content;

  font-family: var(--font-family);
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 22px;

  pointer-events: none;
}

/* Анимация изображения слайда */
.special_swiper__img {
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

.swiper-slide-active .special_swiper__img {
  transform: scale(1);
  opacity: 1;
  transition: transform 1s, opacity 1s;
  transition-delay: 0.15s;
}

/* wwwwwwwwwwwwwww */
.special__info_btn100 {
  position: absolute;
  bottom: 0;
  z-index: 100;
}
</style>
