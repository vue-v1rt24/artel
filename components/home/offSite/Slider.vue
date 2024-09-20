<script setup lang="ts">
import Swiper from 'swiper';
import 'swiper/css';

//
const { data, error } = await useFetch('/api/getImageOffSite');
console.log(data.value);

//
onMounted(() => {
  const swiper = new Swiper('.off_slider', {
    direction: 'vertical',
  });
});
</script>

<template>
  <div class="off_slider swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
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
