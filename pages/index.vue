<script setup lang="ts">
import type { TypeHomeQueryTransform } from '~/types/pages/pageHome.types';

// Получение акций
const { data: stocks } = await useFetch('/api/getStocksHome');

// Получение данных страницы
const { data: home } = await useFetch<TypeHomeQueryTransform>('/api/pages/pageHome');

// Получение данных раздела: Специальные предложения
const { data: specials } = await useFetch('/api/getSpecialOffers');

//
useSeoMeta({
  title: home.value?.seo.titleSeo,
  description: home.value?.seo.descriptionSeo,
});
</script>

<template>
  <div class="container">
    <!-- Слайдер акций -->
    <SlidersStocks v-if="stocks?.length" :stocks class="slider_stocks" />

    <!-- Раздел: Официальный сайт магазина «Золотая Артель» -->
    <HomeOffSite v-if="home?.offSite" :content="home.offSite" />

    <!-- Раздел: Специальные предложения -->
    <SlidersSpecialOffers v-if="specials?.length" :specials />

    <!-- Раздел: Каталог -->
    <HomeCatalog />

    <!-- Раздел: Популярные товары -->
    <SlidersPopularProducts />
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
