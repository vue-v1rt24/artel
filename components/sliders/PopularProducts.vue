<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//
const { data: products } = await useFetch('/api/getPopularProducts');

//
const swiperInstance = ref<Swiper | null>(null);

//
onMounted(() => {
  swiperInstance.value = new Swiper('.popular_swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: '30',
    loop: true,
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
});

onUnmounted(() => {
  if (swiperInstance.value && swiperInstance.value.destroy) {
    swiperInstance.value.destroy();
    swiperInstance.value = null;
  }
});
</script>

<template>
  <div v-if="products?.length" class="popular_bx">
    <div class="popular__title">
      <h2 class="h2_56">Популярные товары</h2>

      <!--  -->
      <div class="swiper-btn swiper-popular-button-prev"></div>
      <div class="swiper-btn swiper-popular-button-next"></div>
    </div>

    <!--  -->
    <div class="popular_swiper swiper">
      <div class="swiper-wrapper sdvig">
        <div v-for="product in products" :key="product.databaseId" class="swiper-slide">
          <CatalogProductCard :product />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.popular__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }

  /*  */
  .h2_56 {
    margin-right: 42px;
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

/*  */
.swiper-slide {
  width: 377px;

  /*  */
  @media (max-width: 768px) {
    width: 328px;
  }

  @media (max-width: 576px) {
    width: 150px;
  }
}

/*  */
.swiper-popular-button-prev {
  rotate: y 180deg;
  margin: 0 42px 0 auto;
}
</style>
