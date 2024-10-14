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

// console.log(parentCatalogs.value);
console.log(childrenCatalogs.value);

//
useSeoMeta({
  title: childrenCatalogs.value?.dataParentCategory.seo.titleSeo,
  description: childrenCatalogs.value?.dataParentCategory.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <UiBreadCrumbs :links="[{ title: 'Каталог' }]" />

    <!--  -->
    <div class="catalog">
      <div class="container">
        <div class="catalog__header">
          <h1 class="h2_72">Каталог изделий из золота</h1>

          <ul class="catalog__header_list">
            <li
              v-for="link in parentCatalogs"
              :key="link.databaseId"
              :class="['catalog__header_list_item', { active: slug === link.slug }]"
            >
              <NuxtLink :to="`/catalog/${link.slug}`">
                <span class="catalog__header_title">{{ link.name }}</span>

                <NuxtImg
                  :src="link.image.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  class="catalog__header_img"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!--  -->
        <ul class="catalog_children_list">
          <CatalogCategoryItem
            v-for="item in childrenCatalogs?.childrenCategories"
            :key="item.databaseId"
            :parent-category-name="slug"
            :category="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.catalog__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;

  /*  */
  @media (max-width: 1500px) {
    flex-direction: column;
    row-gap: 70px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    row-gap: 52px;
    margin-bottom: 40px;
  }

  @media (max-width: 576px) {
    row-gap: 42px;
    margin-bottom: 32px;
  }
}

/*  */
.h2_72 {
  max-width: 550px;

  /*  */
  @media (max-width: 1500px) {
    max-width: 100%;
  }
}

/*  */
.catalog__header_list {
  display: flex;
  column-gap: 30px;
}

/*  */
.catalog__header_list_item {
  position: relative;
  width: 378px;
  height: 110px;
  background-color: white;
  border: 2px solid var(--low-green);
  border-radius: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 600px) {
    height: 83px;
    border-radius: 16px;
  }

  /*  */
  a {
    position: absolute;
    inset: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 90%;
    color: var(--main-green);
    display: block;
    padding: 32px;

    /*  */
    @media (max-width: 600px) {
      font-size: 15px;
      padding: 20px;
    }

    @media (max-width: 576px) {
      padding: 16px;
    }

    /*  */
    &.active {
      background-color: var(--low-green);
    }

    /*  */
    img {
      position: absolute;
      bottom: -40px;
      right: 30px;
      width: 134px;
      mix-blend-mode: darken;

      /*  */
      @media (max-width: 700px) {
        right: 0;
      }

      @media (max-width: 600px) {
        bottom: -30px;
        width: 100px;
      }

      @media (max-width: 576px) {
        right: -3px;
        width: 93px;
      }
    }
  }
}
</style>
