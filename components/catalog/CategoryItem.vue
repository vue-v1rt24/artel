<script setup lang="ts">
defineProps<{
  parentCategoryName: string;
  category: {
    databaseId: number;
    name: string;
    slug: string;
    image: { mediaItemUrl: string };
  };
}>();
</script>

<template>
  <li class="category">
    <NuxtLink :to="`/catalog/${parentCategoryName}/${category.slug}`">
      <span class="category__title">{{ category.name }}</span>

      <NuxtImg
        :src="category.image.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="category__img"
      />
    </NuxtLink>
  </li>
</template>

<style lang="css" scoped>
.category {
  position: relative;
  background-color: var(--green-50);
  border-radius: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 768px) {
    border-radius: 16px;
  }

  /*  */
  a {
    height: 200px;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: var(--main-green);
    display: block;
    padding: 42px;

    /*  */
    @media (max-width: 1280px) {
      height: 190px;
      padding: 32px;
    }

    @media (max-width: 768px) {
      height: 180px;
      font-size: 20px;
      padding: 26px;
    }

    @media (max-width: 700px) {
      height: 100%;
      font-size: 17px;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      padding: 22px;
    }
  }
}

.category__title {
  max-width: 180px;
  display: block;
}

.category__img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 130px;
  mix-blend-mode: darken;
  scale: 1;
  transition: scale 0.3s;

  /*  */
  .category:hover & {
    scale: 1.2;
  }

  /*  */
  @media (max-width: 1280px) {
    width: 148px;
    bottom: 10px;
    right: 10px;
  }

  @media (max-width: 700px) {
    position: static;
    width: 136px;
    margin-top: auto;
  }
}
</style>
