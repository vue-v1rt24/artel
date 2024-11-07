<script setup lang="ts">
import { EnumTypeNewsBlog } from '~/server/types/pages/news/news.types';

//
const { news } = defineProps<{
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
  };
}>();

// console.log(news);
</script>

<template>
  <div class="news">
    <NuxtLink :to="{ path: `/${EnumTypeNewsBlog.NEWS}/${news.slug}` }">
      <div class="news__img">
        <NuxtImg
          :src="news.featuredImage.node.mediaItemUrl"
          format="avif, webp"
          densities="x1"
          loading="lazy"
        />
      </div>

      <h3 class="news__title">{{ news.title }}</h3>

      <time class="news__date" :datetime="news.date">{{ dateFormatter(news.date) }}</time>
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
    height: 100%;
    object-fit: cover;
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
  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin: 24px 0 16px 0;
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
