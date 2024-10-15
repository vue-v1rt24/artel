<script setup lang="ts">
const { slug, slugcat } = useRoute().params as { slug: string; slugcat: string };

if (!slug && !slugcat) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Параметры не переданы',
  });
}

// console.log(slug, slugcat);

//
const { data: category, error } = await useFetch(`/api/pages/catalog/subcategory/${slugcat}`);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Запись не найдена',
  });
}

console.log(category.value);

//
const selectOptions = ['По популярности', 'По популярности 2', 'По популярности 3'];

//
const catName = computed(() => (slug === 'zoloto' ? 'Золото' : 'Серебро'));
</script>

<template>
  <div>
    <UiBreadCrumbs
      :links="[
        { title: 'Каталог', link: '/catalog/zoloto' },
        { title: catName, link: `/catalog/${slug}` },
        { title: category?.subCategoryName || '' },
      ]"
    />

    <!--  -->
    <div class="container">
      <h1 class="h2_72">{{ category?.subCategoryName }}</h1>

      <!-- Сортировка -->
      <UiSelect :options="selectOptions" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
