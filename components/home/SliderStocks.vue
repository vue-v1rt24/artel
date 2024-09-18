<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//
const { data: stocks, error } = await useFetch('/api/getStocksHome');

if (error.value) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Данные не получены',
  });
}

console.log(stocks.value);

//
onMounted(() => {
  const swiper = new Swiper('.swiper_stocks', {
    modules: [Navigation, Pagination],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });
});
</script>

<template>
  <div class="swiper_stocks swiper">
    <div class="swiper-wrapper">
      <div v-for="stock in stocks" :key="stock.id" class="swiper-slide">
        <NuxtLink :to="`/stocks/${stock.slug}`">
          <NuxtImg :src="stock.img1600" format="avif, webp" densities="x1" />
        </NuxtLink>
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style lang="css" scoped></style>
