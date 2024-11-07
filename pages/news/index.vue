<script setup lang="ts">
const { data: actual } = await useFetch('/api/pages/news/actual');
const { data: news } = await useFetch('/api/pages/news');

//
useSeoMeta({
  title: 'Новости',
  // description: '',
});
</script>

<template>
  <div>
    <!-- Актуальное -->
    <NewsActual v-if="actual" :actual />

    <!-- Новости -->
    <NewsNewsBlock v-if="news" :news="news.content" :pagination="news.pagination" title="Новости" />
  </div>
</template>

<style lang="css" scoped></style>
