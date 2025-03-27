<script setup lang="ts">
import { EnumTypeNewsBlog } from '~/server/types/pages/news/index.types';

//
const { article } = defineProps<{
  article: {
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
  };
}>();
</script>

<template>
  <div class="news">
    <NuxtLink :to="{ path: `/${article.contentTypeName}/${article.slug}` }">
      <div class="news__img">
        <img :src="article.featuredImage.node?.mediaItemUrl" loading="lazy" alt="" />
      </div>

      <h3 class="news__title">{{ article.title }}</h3>

      <time class="news__date" :datetime="article.date">{{ dateFormatter(article.date) }}</time>
    </NuxtLink>
  </div>
</template>

<style lang="css" scoped>
.news__img {
  border-radius: 20px;
  overflow: hidden;

  /*  */
  img {
    width: 100%;
  }
}

/*  */
.news__title {
  max-width: 378px;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: var(--main-green);
  margin: 26px 0 14px 0;

  /*  */
  .news:hover & {
    text-decoration: underline solid var(--main-green) 0.5px;
    text-decoration-skip-ink: none;
  }

  /*  */
  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin: 16px 0 10px 0;
  }
}

/*  */
.news__date {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);

  /*  */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}
</style>
