<script setup lang="ts">
import type { TypeBlogFull } from '~/types/pages/news.types';
import 'assets/css/return-styles-wp.css';

//
const route = useRoute();
const { slug } = route.params as { slug: string };

const { data: blog, error } = await useFetch<TypeBlogFull>(`/api/pages/news/blog/${slug}`);

if (!blog.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Запись не найдена',
  });
}

useSeoMeta({
  title: blog.value.singleBlog.seo.titleSeo,
  description: blog.value.singleBlog.seo.descriptionSeo,
});

//
const viewport = useViewport();
</script>

<template>
  <div class="news_single_bx">
    <UiBreadCrumbs
      v-if="viewport.isGreaterOrEquals('screen768')"
      :links="[{ title: 'Блог', link: '/news' }, { title: blog!.singleBlog.title }]"
    />

    <UiGoBackBtn v-if="viewport.isLessThan('screen768')" />

    <div class="container">
      <div class="news_single">
        <div class="news_single__left">
          <div
            v-if="blog?.singleBlog.date && blog.singleBlog.newsFields.newsKolichestvoProsmotrov"
            class="news_single__left_date"
          >
            <time :datetime="blog.singleBlog.date">{{ dateFormatter(blog.singleBlog.date) }}</time>

            <View
              :id="blog.singleBlog.databaseId"
              :count="blog.singleBlog.newsFields.newsKolichestvoProsmotrov"
              name-field="news_kolichestvo_prosmotrov"
              key-storage="view"
            />
          </div>

          <!--  -->
          <h1 class="h2_56">{{ blog?.singleBlog.title }}</h1>

          <!--  -->
          <div
            v-if="blog?.singleBlog.content"
            v-html="blog.singleBlog.content"
            class="wp_content news_single_content"
          ></div>
        </div>

        <div class="news_single__right">
          <Share v-if="blog?.singleBlog.title" :title="blog.singleBlog.title" />

          <NewsOtherArticle
            v-if="blog?.otherBlog"
            title="Читайте другие статьи"
            parent-link="blogs"
            :articles="blog.otherBlog"
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
    font-size: 15px;
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
        font-size: 14px;
      }
    }
  }

  /*  */
  h2 {
    font-size: 26px;

    /*  */
    @media (max-width: 1280px) {
      font-size: 22px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
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
      font-size: 18px;
    }

    @media (max-width: 576px) {
      font-size: 15px;
    }
  }

  /*  */
  strong {
    font-weight: 400;
  }
}
</style>
