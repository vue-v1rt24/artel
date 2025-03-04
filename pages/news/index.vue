<script setup lang="ts">
import type { TypeArticles, TypesVideo } from '~/types/pages/news.types';
import { EnumTypeNewsBlog } from '~/server/types/pages/news/index.types';

// Для раздела "Новости"
const news = ref<TypeArticles | null>(null);
const newsNextPage = ref<string | null>(null);

// Для раздела "Видео"
const videos = ref<TypesVideo | null>(null);
const videoNextPage = ref<string | null>(null);

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

// Для раздела "Видео"
const { data: videosData } = await useFetch('/api/pages/news/video', {
  query: {
    pagination: videoNextPage,
  },
  watch: [videoNextPage],
});

// console.log(videosData.value);

videos.value = videosData.value;

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

// Загрузка данных по кнопке "Показать ещё" в разделе: Видео
const loadDataVideo = (nextPage: string) => {
  isLoading.value = true;
  videoNextPage.value = nextPage;
};

// Срабатывает при клике на кнопку "Показать ещё" в разделах: Новости, Видео и Блог
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

watch(videosData, (val) => {
  if (!val || !videos.value) return;

  videos.value.content.push(...val.content);
  videos.value.pagination = val.pagination;
  isLoading.value = false;
});
</script>

<template>
  <div>
    <!--  -->
    <UiLoading v-if="isLoading" />

    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Новости' }]" />

    <div class="news_page">
      <!-- Актуальное -->
      <NewsActual v-if="actual?.length" :actual />

      <!-- Новости -->
      <NewsArticles
        v-if="news?.content.length"
        title="Новости"
        :articles="news"
        @load-data="loadData"
      />

      <!-- Видео -->
      <NewsVideo v-if="videos?.content.length" :videos @load-data="loadDataVideo" />

      <!-- Блог -->
      <NewsArticles
        v-if="blog?.content.length"
        title="Блог"
        :articles="blog"
        @load-data="loadData"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.news_page {
  display: flex;
  flex-direction: column;
  row-gap: 140px;

  /*  */
  @media (max-width: 768px) {
    row-gap: 100px;
  }

  @media (max-width: 576px) {
    row-gap: 60px;
  }
}
</style>
