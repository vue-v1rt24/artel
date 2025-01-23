<script setup lang="ts">
const { slug } = useRoute().params as { slug: string };

const { data: stock, error } = await useFetch(`/api/pages/stocks/${slug}`);

// console.log(stock.value);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Акция не найдена',
  });
}

// Мета данные
useSeoMeta({
  title: stock.value?.seo.titleSeo,
  description: stock.value?.seo.descriptionSeo,
});

//
const viewport = useViewport();
</script>

<template>
  <div class="sale">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      v-if="viewport.isGreaterOrEquals('screen768')"
      :links="[
        { title: 'Акции', link: '/stocks' },
        { title: stock?.stock.stockZagolovok || 'Нет названия' },
      ]"
    />

    <!-- Кнопка "Вернуться назад" в моб. -->
    <UiGoBackBtn v-else />

    <!--  -->
    <div class="container">
      <div class="sale_top">
        <img
          class="sale_top-desc"
          :src="stock?.stock.stockFullIzobrazhenie1600.node?.mediaItemUrl"
          loading="lazy"
          alt=""
        />

        <img
          class="sale_top-mobile"
          :src="stock?.stock.stockFullIzobrazhenie688.node?.mediaItemUrl"
          loading="lazy"
          alt=""
        />
      </div>

      <div class="sale_text">
        <div class="sale_text-box">
          <h2 class="sale_text-title">Описание акции</h2>
          <div
            v-if="stock?.stock.stockFullOpisanie"
            v-html="stock.stock.stockFullOpisanie"
            class="sale_text-descr"
          ></div>
        </div>

        <div class="sale_text-box">
          <h2 class="sale_text-title">Условия акции</h2>
          <div
            v-if="stock?.stock.stockFullUsloviya"
            v-html="stock.stock.stockFullUsloviya"
            class="sale_text-descr"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sale_top {
  border-radius: 20px;
  overflow: hidden;
}
.sale_top-desc {
  width: 100%;
}
.sale_top-mobile {
  width: 100%;
  display: none;
}
.sale_text {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 62px;
}
.sale_text-title {
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;
}
.sale_text-descr {
  padding-top: 42px;
  font-weight: 200;
  font-size: 20px;
  max-width: 999px;
}

/* Медиа запросы Страница Акции */
@media (max-width: 1360px) {
  .sale_text {
    gap: 52px;
  }
  .sale_text-title {
    font-size: 26px;
  }
  .sale_text-descr {
    padding-top: 32px;
  }
}
@media (max-width: 960px) {
  .sale_text {
    gap: 42px;
    padding-top: 52px;
  }
  .sale_text-title {
    font-size: 22px;
  }
  .sale_text-descr {
    padding-top: 24px;
    font-size: 16px;
  }
}
@media (max-width: 769px) {
  .sale_top-desc {
    display: none;
  }
  .sale_top-mobile {
    display: block;
  }
}
@media (max-width: 576px) {
  .sale_text {
    gap: 32px;
    padding-top: 42px;
  }
  .sale_text-title {
    font-size: 18px;
  }
  .sale_text-descr {
    font-size: 15px;
    padding-top: 18px;
  }
}
</style>
