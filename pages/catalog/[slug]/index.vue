<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { slug } = useRoute().params as { slug: string };

// Получение родительских категорий
const { data: parentCatalogs, error: parentCatalogsError } = await useFetch('/api/pages/catalog', {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

// Получение дочерних категорий
const { data: childrenCatalogs, error: childrenCatalogsError } = await useFetch(
  `/api/pages/catalog/${slug}`,
);

console.log(parentCatalogs.value);
console.log(childrenCatalogs.value);
</script>

<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__header">
        <h1 class="h2_72">Каталог изделий из золота</h1>

        <div class="catalog__categories">
          <NuxtLink to="/catalog/zoloto">Золото</NuxtLink>

          <NuxtLink to="/catalog/serebro">Серебро</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
