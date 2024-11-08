<script setup lang="ts">
import type { TypeArticles } from '~/types/pages/news.types';
import { EnumTypeNewsBlog } from '~/server/types/pages/news/index.types';

//
const { articles } = defineProps<{
  title: string;
  articles: TypeArticles;
}>();

// console.log(articles);

//
const emit = defineEmits<{
  loadData: [nextPage: string, type: EnumTypeNewsBlog];
}>();
</script>

<template>
  <div class="news_bx">
    <div class="container">
      <h2 class="h2_56">{{ title }}</h2>

      <!--  -->
      <div class="news_list">
        <NewsArticlesItem v-for="article in articles.content" :key="article.databaseId" :article />
      </div>

      <!--  -->
      <UiButton
        v-if="articles.pagination.hasNextPage"
        title="Показать ещё"
        width="100%"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        @btn-click="
          emit('loadData', articles.pagination.endCursor, articles.content[0].contentTypeName)
        "
      />
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

/*  */

.btn {
  margin-top: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 42px;
  }

  @media (max-width: 576px) {
    margin-top: 32px;
  }
}
</style>
