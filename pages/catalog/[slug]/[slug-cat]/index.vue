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
const catName = computed(() => (slug === 'zoloto' ? 'Золото' : 'Серебро'));
</script>

<template>
  <div>
    <UiBreadCrumbs
      :links="[
        { title: 'Каталог', link: '/catalog/zoloto' },
        { title: catName, link: `/catalog/${slug}` },
        { title: slugcat },
      ]"
    />
  </div>
</template>

<style lang="css" scoped></style>
