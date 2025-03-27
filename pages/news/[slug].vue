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

//
useSeoMeta({
  title: news.value.singleNews.seo.titleSeo,
  description: news.value.singleNews.seo.descriptionSeo,
});

//
const viewport = useViewport();
</script>

<template>
  <div class="news_single_bx">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      v-if="viewport.isGreaterOrEquals('screen768')"
      :links="[{ title: 'Новости', link: '/news' }, { title: news!.singleNews.title }]"
    />

    <!-- Вернуться назад -->
    <UiGoBackBtn v-if="viewport.isLessThan('screen768')" />

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

        <div class="news_single__right">
          <!-- Поделиться -->
          <Share v-if="news?.singleNews.title" :title="news.singleNews.title" />

          <!-- Другие статьи -->
          <NewsOtherArticle
            v-if="news?.otherNews"
            title="Читайте другие статьи"
            parent-link="news"
            :articles="news.otherNews"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.news_single {
  display: grid;
  grid-template-columns: 62% 378px;
  justify-content: space-between;
  column-gap: 140px;

  /*  */
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 378px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

/*  */
.news_single__left {
  @media (max-width: 1200px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
}

/*  */
.news_single__left_date {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);
  display: flex;
  align-items: center;
  column-gap: 32px;

  /*  */
  @media (max-width: 576px) {
    /* font-size: 15px; */
    column-gap: 28px;
  }
}

/*  */
.h2_56 {
  margin: 26px 0 40px 0;

  /*  */
  @media (max-width: 576px) {
    margin: 24px 0 26px 0;
  }
}

/*  */
:deep(.other_article_bx) {
  margin-top: 100px;

  /*  */
  @media (max-width: 576px) {
    margin-top: 60px;
  }
}
</style>

<style>
.wp_content.news_single_content {
  img {
    width: 100%;
    border-radius: 20px;
  }

  .wp-block-media-text__content {
    margin-top: 24px;

    /*  */
    @media (max-width: 1280px) {
      margin-top: 20px;
    }

    @media (max-width: 576px) {
      margin-top: 14px;
    }

    /*  */
    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 140%;
      color: var(--gray-text);

      /*  */
      @media (max-width: 576px) {
        /* font-size: 14px; */
      }
    }
  }

  /*  */
  h2 {
    font-size: 26px;

    /*  */
    @media (max-width: 1280px) {
      /* font-size: 22px; */
    }

    @media (max-width: 576px) {
      /* font-size: 18px; */
    }
  }

  /*  */
  p {
    font-weight: 200;
    font-size: 20px;
    line-height: 140%;
    color: var(--main-green);

    /*  */
    @media (max-width: 1280px) {
      /* font-size: 18px; */
    }

    @media (max-width: 576px) {
      /* font-size: 15px; */
    }
  }
}
</style>
