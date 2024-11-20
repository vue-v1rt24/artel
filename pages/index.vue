<script setup lang="ts">
import type { TypeHomeQueryTransform } from '~/types/pages/home.types';

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

//
onMounted(() => {
  sdvigGallery();
});
</script>

<template>
  <div>
    <div class="container">
      <!-- Слайдер акций -->
      <SlidersStocks v-if="stocks?.length" :stocks class="slider_stocks" />

      <!-- Раздел: Официальный сайт магазина «Золотая Артель» -->
      <HomeOffSite v-if="home?.offSite" :content="home.offSite" />

      <!-- Раздел: Специальные предложения -->
      <SlidersSpecialOffers v-if="specials?.length" :specials />

      <!-- Раздел: Каталог -->
      <HomeCatalog v-if="home?.catalog" :catalog="home.catalog" />

      <!-- Раздел: Популярные товары -->
      <SlidersPopularProducts />

      <!-- Раздел: Хранители ювелирного искусства -->
      <HomeGuardiansArt v-if="home?.guardians" :guardians="home.guardians" />

      <!-- Раздел: Ювелирные украшения на заказ -->
      <HomeCustomJewelry v-if="home?.customJewelry" :custom-jewelry="home.customJewelry" />
    </div>

    <!-- Раздел: Ремонт ювелирных изделий -->
    <HomeJewelryRepair v-if="home?.jewelryRepair" :jewelry-repair="home.jewelryRepair" />

    <!-- Раздел: Ломбарды в Ставрополе и Михайловске -->
    <HomeLombard v-if="home?.lombard" :lombard="home.lombard" />
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
