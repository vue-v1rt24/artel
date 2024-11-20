<script setup lang="ts">
defineProps<{
  title: string;
  parentLink: string;
  articles: {
    databaseId: number;
    date: string;
    slug: string;
    title: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
  }[];
}>();
</script>

<template>
  <div class="other_article_bx">
    <div class="other_article__title">{{ title }}</div>

    <ul class="other_article__list">
      <li v-for="article in articles" :key="article.databaseId" class="other_article__item">
        <NuxtLink :to="`/${parentLink}/${article.slug}`">
          <NuxtImg
            :src="article.featuredImage.node.mediaItemUrl"
            format="avif, webp"
            densities="x1"
          />

          {{ article.title }}

          <div class="other_article__date">{{ dateFormatter(article.date) }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.other_article_bx {
  margin-top: 118px;
}

/*  */
.other_article__title {
  font-weight: 400;
  font-size: 26px;
  line-height: 140%;
  color: var(--main-green);
  margin-bottom: 42px;

  /*  */
  @media (max-width: 1200px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
}

/*  */
.other_article__item {
  /*  */
  &:not(:last-child) {
    margin-bottom: 42px;

    /*  */
    @media (max-width: 576px) {
      margin-bottom: 32px;
    }
  }

  /*  */
  &:hover {
    text-decoration: underline solid var(--main-green) 0.5px;
  }

  /*  */
  a {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--main-green);

    /*  */
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }

  /*  */
  img {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 20px;

    /*  */
    @media (max-width: 1280px) {
      margin-bottom: 26px;
    }

    @media (max-width: 576px) {
      margin-bottom: 24px;
    }
  }
}

/*  */
.other_article__date {
  display: none;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);
  margin-top: 14px;

  /*  */
  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    margin-top: 16px;
  }
}
</style>
