<script setup lang="ts">
import type { TypeNewsFull } from '~/types/pages/news.types';
import 'assets/css/return-styles-wp.css';

//
const route = useRoute();
const { slug } = route.params as { slug: string };

const { data: news, error } = await useFetch<TypeNewsFull>(`/api/pages/news/${slug}`);

if (!news.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Новость не найдена',
  });
}

console.log(news.value);

//
useSeoMeta({
  title: news.value.singleNews.seo.titleSeo,
  description: news.value.singleNews.seo.descriptionSeo,
});
</script>

<template>
  <div class="news_single_bx">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      :links="[
        { title: 'Новости', link: '/news' },
        { title: 'Как выбрать полудрагоценный камень по гороскопу?' },
      ]"
    />

    <!--  -->
    <div class="container">
      <div class="news_single">
        <div class="news_single__left">
          <div
            v-if="news?.singleNews.date && news.singleNews.newsFields.newsKolichestvoProsmotrov"
            class="news_single__left_date"
          >
            <time :datetime="news.singleNews.date">{{ dateFormatter(news.singleNews.date) }}</time>

            <!-- Счётчик просмотров записи -->
            <View
              :id="news.singleNews.databaseId"
              :count="news.singleNews.newsFields.newsKolichestvoProsmotrov"
              name-field="news_kolichestvo_prosmotrov"
              key-storage="view"
            />
          </div>

          <!--  -->
          <h1 class="h2_56">{{ news?.singleNews.title }}</h1>

          <!--  -->
          <div
            v-if="news?.singleNews.content"
            v-html="news.singleNews.content"
            class="wp_content news_single_content"
          ></div>
        </div>

        <div class="news_single__right"></div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
/*  */
.news_single__left_date {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);
  display: flex;
  align-items: center;
  column-gap: 32px;
}

/*  */
.h2_56 {
  margin: 26px 0 40px 0;
}
</style>

<style>
.news_single_content {
  img {
    border-radius: 20px;
  }

  .wp-block-media-text__content {
    margin-top: 24px;

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 140%;
      color: var(--gray-text);
    }
  }

  /*  */
  p {
    font-weight: 200;
    font-size: 20px;
    line-height: 140%;
    color: var(--main-green);
  }
}
</style>
