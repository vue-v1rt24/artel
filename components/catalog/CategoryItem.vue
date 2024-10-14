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

<style lang="css" scoped></style>
