<script setup lang="ts">
import '~/assets/css/return-styles-wp.css';

//
const { data: oferta } = await useFetch('/api/pages/oferta');

// console.log(oferta.value);

//
useSeoMeta({
  title: oferta.value?.seo.titleSeo,
  description: oferta.value?.seo.descriptionSeo,
});
</script>

<template>
  <div class="wp_content privacy_wp">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Публичная оферта' }]" />

    <!--  -->
    <div v-if="oferta?.content" v-html="oferta.content" class="container"></div>
  </div>
</template>

<style lang="css">
.wp_content.privacy_wp {
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);

  /*  */
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin: 30px 0;
  }

  /*  */
  p {
    font-weight: 200;
  }
}
</style>
