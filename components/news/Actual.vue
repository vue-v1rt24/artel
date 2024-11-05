<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui';

import Swiper from 'swiper';
import 'swiper/css';

//
const { data: actual } = await useFetch('/api/pages/news/actual');

console.log(actual.value);

//
const swiperActual = ref<Swiper | null>(null);

//
onMounted(() => {
  swiperActual.value = new Swiper('.swiper-actual', {
    speed: 400,
    spaceBetween: 100,
  });
});

//
onUnmounted(() => {
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }

  if (swiperActual.value && swiperActual.value.destroy) {
    swiperActual.value.destroy();
  }
});
</script>

<template>
  <div class="actual_bx">
    <h2 class="h2_56">Актуальное</h2>

    <!--  -->
    <div class="swiper-actual swiper">
      <div class="swiper-wrapper">
        <div v-for="video in actual" :key="video.databaseId" class="swiper-slide"></div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
