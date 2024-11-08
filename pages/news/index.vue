<script setup lang="ts">
import type { TypeArticles } from '~/types/pages/articles.types';

import { EnumTypeNewsBlog } from '~/server/types/pages/news/index.types';

// Для раздела "Новости"
const news = ref<TypeArticles | null>(null);
const newsNextPage = ref<string | null>(null);

// Для раздела "Блог"
const blog = ref<TypeArticles | null>(null);
const blogNextPage = ref<string | null>(null);

//
const isLoading = ref(false);

// === Запросы
// Для раздела "Актуальное"
const { data: actual } = await useFetch('/api/pages/news/actual');

// Для раздела "Новости"
const { data: newsData } = await useFetch('/api/pages/news', {
  query: {
    pagination: newsNextPage,
  },
  watch: [newsNextPage],
});

// console.log(newsData.value);

news.value = newsData.value;

// Для раздела "Блог"
const { data: blogData } = await useFetch('/api/pages/news/blog', {
  query: {
    pagination: blogNextPage,
  },
  watch: [blogNextPage],
});

// console.log(blogData.value);

blog.value = blogData.value;

//
useSeoMeta({
  title: 'Новости',
  // description: '',
});

// Загрузка данных по кнопке "Показать ещё" в разделах: Новости и Блог
const loadData = (nextPage: string, type: EnumTypeNewsBlog) => {
  isLoading.value = true;

  if (type === EnumTypeNewsBlog.NEWS) {
    newsNextPage.value = nextPage;
  } else if (type === EnumTypeNewsBlog.BLOG) {
    blogNextPage.value = nextPage;
  }
};

// Срабатывает при клике на кнопку "Показать ещё" в разделах: Новости и Блог
watch(newsData, (val) => {
  if (!val || !news.value) return;

  news.value.content.push(...val.content);
  news.value.pagination = val.pagination;
  isLoading.value = false;
});

watch(blogData, (val) => {
  if (!val || !blog.value) return;

  blog.value.content.push(...val.content);
  blog.value.pagination = val.pagination;
  isLoading.value = false;
});
</script>

<template>
  <div>
    <!--  -->
    <UiLoading v-if="isLoading" />

    <!-- Актуальное -->
    <NewsActual v-if="actual" :actual />

    <!-- Новости -->
    <NewsNewsBlock v-if="news" title="Новости" :articles="news" @load-data="loadData" />

    <!-- Блог -->
    <NewsNewsBlock v-if="blog" title="Блог" :articles="blog" @load-data="loadData" />
  </div>
</template>

<style lang="css" scoped></style>
