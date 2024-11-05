<script setup lang="ts">
const { data: about } = await useFetch('/api/pages/about');

// console.log(about.value);

//
useSeoMeta({
  title: about.value?.seo.titleSeo,
  description: about.value?.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs dark :links="[{ title: 'О компании' }]" />

    <!-- Первый экран -->
    <PreviewScreen
      v-if="about?.previewScreenPage"
      :preview-screen-page="about.previewScreenPage"
      title="О компании"
    />

    <!-- История бренда -->
    <AboutHistoryBrand v-if="about?.historyBrand" :histories="about.historyBrand" />

    <!-- Награды -->
    <div class="nagradi">
      <SlidersGallery
        v-if="about?.dostizheniya"
        id="nagradi"
        :gallery="about.dostizheniya"
        title="Наши самые значимые награды и достижения:"
        loop
      />
    </div>

    <!-- Наша компания является участником ГИИС ДМДК -->
    <AboutGiis />

    <!-- Сегодня "Золотая Артель" — это: -->
    <AboutSegodnya v-if="about?.segodnya" :segodnya="about.segodnya" />

    <!-- Наш ассортимент -->
    <AboutAssortment v-if="about?.assortment" :assortment="about.assortment" />

    <!-- Наши услуги -->
    <AboutServices v-if="about?.services" :services="about.services" />

    <!-- "Золотая Артель" - Ваш путеводитель в мире ювелирного искусства -->
    <div class="aboutTravelGuideGallery">
      <SlidersGallery
        v-if="about?.gallery"
        id="aboutTravelGuideGallery"
        title='"Золотая Артель" - Ваш путеводитель в мире ювелирного искусства.'
        desc="Мы стремимся к тому, чтобы каждый наш клиент почувствовал себя особенным и нашел у нас то, что искал."
        :gallery="about.gallery"
        loop
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
:deep(.preview_screen .p_20) {
  max-width: 890px;
}

/*  */

.nagradi {
  margin: 120px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 140px 0 100px 0;
  }

  @media (max-width: 768px) {
    margin: 80px 0 100px 0;
  }

  @media (max-width: 576px) {
    margin: 60px 0 60px 0;

    /*  */
    :deep(.swiper-slide) {
      width: 150px;
    }
  }
}

/*  */

.aboutTravelGuideGallery {
  padding-top: 150px;

  /*  */
  @media (max-width: 1280px) {
    padding-top: 140px;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
  }

  @media (max-width: 576px) {
    padding-top: 60px;
  }
}
</style>
