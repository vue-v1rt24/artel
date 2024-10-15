<script setup lang="ts">
import '~/assets/css/return-styles-wp.css';

//
const nuxtApp = useNuxtApp();
const { slug } = useRoute().params as { slug: string };

//
const isLoadChildrenCats = ref(false);

// Получение родительских категорий
const { data: parentCatalogs, error: parentCatalogsError } = await useLazyFetch(
  '/api/pages/catalog',
  {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    },
  },
);

// Получение дочерних категорий
const {
  data: childrenCatalogs,
  status: childrenCatalogsStatus,
  error: childrenCatalogsError,
} = await useLazyFetch(`/api/pages/catalog/${slug}`);

// console.log(parentCatalogs.value);
// console.log(childrenCatalogs.value);

//
watch(childrenCatalogs, () => {
  isLoadChildrenCats.value = false;
});

//
useSeoMeta({
  title: childrenCatalogs.value?.dataParentCategory.seo.titleSeo,
  description: childrenCatalogs.value?.dataParentCategory.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <!-- Предзагрузчик -->
    <UiPreloader v-if="childrenCatalogsStatus === 'pending' || isLoadChildrenCats" fixed />

    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Каталог' }]" />

    <!-- Каталог -->
    <div class="catalog">
      <div class="container">
        <div class="catalog__header">
          <h1 class="h2_72">Каталог изделий из золота</h1>

          <!-- Родительские категории -->
          <ul class="catalog__header_list">
            <li
              v-for="link in parentCatalogs"
              :key="link.databaseId"
              :class="['catalog__header_list_item', { active: slug === link.slug }]"
            >
              <NuxtLink :to="`/catalog/${link.slug}`" @click="isLoadChildrenCats = true">
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

        <!-- Дочернии категории -->
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

    <!-- Популярные товары -->
    <div class="container">
      <SlidersPopularProducts />
    </div>

    <!-- Описание категории -->
    <div
      v-if="childrenCatalogs?.dataParentCategory.catalogPageContent.opisanieKategorii"
      v-html="childrenCatalogs.dataParentCategory.catalogPageContent.opisanieKategorii"
      class="container wp_content"
    ></div>
  </div>
</template>

<style lang="css" scoped>
.catalog {
  margin-bottom: 150px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 60px) {
    margin-bottom: 60px;
  }
}

/*  */
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

  /*  */
  @media (max-width: 576px) {
    column-gap: 20px;
  }
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
      pointer-events: none;
      user-select: none;
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

/*  */
.catalog_children_list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  /*  */
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    gap: 20px;
  }
}

/*  */
.wp_content {
  margin-top: 147px;

  /*  */
  @media (max-width: 1280px) {
    margin-top: 140px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  /*  */
  :global(h2) {
    font-weight: 300;
    font-size: 32px;
    line-height: 130%;
    color: var(--main-green);

    /*  */
    @media (max-width: 1280px) {
      font-size: 26px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }
  }

  :global(p) {
    font-weight: 200;
    font-size: 20px;
    line-height: 140%;
    color: var(--medium-green);

    /*  */
    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 576px) {
      font-size: 15px;
    }
  }
}
</style>
