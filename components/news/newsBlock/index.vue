<script setup lang="ts">
import { EnumTypeNewsBlog } from '~/server/types/pages/news/news.types';

//
const { news } = defineProps<{
  title: string;
  news: {
    databaseId: number;
    date: string;
    slug: string;
    title: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
    contentTypeName: EnumTypeNewsBlog;
  }[];
  pagination: {
    hasNextPage: boolean;
    endCursor: string;
  };
}>();

// console.log(news);
</script>

<template>
  <div class="news_bx">
    <div class="container">
      <h2 class="h2_56">{{ title }}</h2>

      <!--  -->
      <div class="news_list">
        <NewsNewsBlockItem v-for="n in news" :key="n.databaseId" :news="n" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.news_bx {
  margin-top: 140px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
  }
}

/*  */
.news_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 30px;
  margin-top: 60px;

  /*  */
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 42px 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 42px 30px;
    margin-top: 52px;
  }

  @media (max-width: 576px) {
    gap: 32px 30px;
    margin-top: 32px;
  }
}
</style>
