<script setup lang="ts">
defineProps<{
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
    <NuxtLink :to="`/catalog/:slug()/:slugcat()`"></NuxtLink>
  </li>
</template>

<style lang="css" scoped></style>
