<script setup lang="ts">
const { data: about } = await useFetch('/api/pages/about');

console.log(about.value);

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
        :gallery="about.dostizheniya"
        title="Наши самые значимые награды и достижения:"
        loop
      />
    </div>

    <!-- Наша компания является участником ГИИС ДМДК -->
    <AboutGiis />

    <!-- Сегодня "Золотая Артель" — это: -->
    <AboutSegodnya v-if="about?.segodnya" :segodnya="about.segodnya" />
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
</style>
