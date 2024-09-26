<script setup lang="ts">
const { data: stocks } = await useFetch('/api/getStocksHome');
</script>

<template>
  <div class="container">
    <SlidersStocks v-if="stocks?.length" :stocks class="slider_stocks" />

    <!--  -->
    <HomeOffSite />
  </div>
</template>

<style lang="css" scoped>
.slider_stocks {
  margin-top: 40px;
  margin-bottom: 150px;

  /*  */
  @media (max-width: 1400px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 30px;
    margin-bottom: 60px;
  }
}
</style>
