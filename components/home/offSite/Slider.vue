<script setup lang="ts">
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

//
const { data: sliders, error } = await useFetch('/api/getImageOffSite');
console.log(sliders.value);

//
onMounted(() => {
  const swiper = new Swiper('.off_slider', {
    modules: [Autoplay],
    direction: 'vertical',
    autoplay: {
      delay: 1000,
    },
    loop: true,
  });
});
</script>

<template>
  <div class="off_slider swiper">
    <div class="swiper-wrapper">
      <div v-for="slider in sliders" :key="slider.id" class="swiper-slide">
        <NuxtImg :src="slider.img" densities="x1" format="avif, webp" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.swiper {
  width: 100%;
  height: 600px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
