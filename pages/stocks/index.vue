<script setup lang="ts">
const { data: stocks } = await useFetch('/api/pages/stocks');

// console.log(stocks.value);

/*  */
useSeoMeta({
  title: stocks.value?.home.seo.titleSeo,
  description: stocks.value?.home.seo.descriptionSeo,
});
</script>

<template>
  <div class="sales">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Акции' }]" />

    <!--  -->
    <div class="container">
      <h1 class="h2_72">Акции</h1>

      <!--  -->
      <div class="sales_wrap">
        <div v-for="stock in stocks?.socks" :key="stock.databaseId" class="sales_item">
          <NuxtLink :to="`/stocks/${stock.slug}`" class="sales_item__link"></NuxtLink>

          <div class="sales_item-baner">
            <NuxtImg
              :src="stock.stocksFields.stockIzobrazhenie785.node?.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              class="sales_item-desc"
              alt=""
            />

            <NuxtImg
              :src="stock.stocksFields.stockIzobrazhenie688.node?.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              class="sales_item-mobile"
              alt=""
            />
          </div>

          <div class="sales_item-title">
            {{ stock.stocksFields.stockZagolovok }}
          </div>

          <div class="sales_item-descr">{{ stock.stocksFields.stockOpisanie }}</div>
        </div>
      </div>

      <!--  -->
      <div v-if="stocks?.home.content" v-html="stocks.home.content" class="sales-text"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sales_wrap {
  padding: 80px 0 150px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 50px;
}
.sales_item {
  position: relative;
}
.sales_item__link {
  position: absolute;
  inset: 0;
}
.sales_item-baner {
  border-radius: 20px;
  overflow: hidden;
}
.sales_item-desc {
  width: 100%;
}
.sales_item-mobile {
  width: 100%;
  display: none;
}
.sales_item-title {
  max-width: 508px;
  font-weight: 400;
  font-size: 24px;
  padding-top: 26px;

  /*  */
  .sales_item:hover & {
    text-decoration: underline solid var(--main-green) 0.5px;
    text-decoration-skip-ink: none;
  }
}
.sales_item-descr {
  font-weight: 300;
  font-size: 18px;
  color: #b9c0c0;
  padding-top: 14px;
}
.sales-text {
  font-weight: 200;
  font-size: 20px;
  color: #5b6b6b;
  max-width: 1190px;
}

/* Медиа запросы Страницы со всеми акциями */

@media (max-width: 1360px) {
  .sales_wrap {
    padding: 60px 0 140px 0;
  }
}

@media (max-width: 769px) {
  .sales_wrap {
    padding: 42px 0 80px 0;
    grid-template-columns: 1fr;
    gap: 42px;
  }
  .sales_item-desc {
    display: none;
  }
  .sales_item-mobile {
    display: block;
  }
}

@media (max-width: 576px) {
  .sales_wrap {
    padding: 32px 0 0 0;
    gap: 32px;
  }
  .sales_item-title {
    font-size: 18px;
    padding-top: 16px;
  }
  .sales_item-descr {
    font-size: 16px;
    padding-top: 10px;
  }
  .sales-text {
    display: none;
  }
}
</style>
