<script setup lang="ts">
const { slug } = useRoute().params as { slug: string };

//
const { data: product, error } = await useFetch(`/api/pages/product/${slug}`);

/* if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Товар не найден',
  });
} */

// console.log(product.value);

//
useSeoMeta({
  title: product.value?.seo.titleSeo,
  description: product.value?.seo.descriptionSeo,
});
</script>

<template>
  <div>Страница продукта</div>
</template>

<style lang="css" scoped></style>
