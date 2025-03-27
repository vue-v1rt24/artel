<script setup lang="ts">
import '~/assets/css/return-styles-wp.css';

//
const nuxtApp = useNuxtApp();
const { slug } = useRoute().params as { slug: string };

//
const isLoading = ref(false);

const { data: parentCatalogs, error: parentCatalogsError } = await useFetch('/api/pages/catalog', {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});

if (parentCatalogsError.value) {
  throw createError({
    statusCode: 404,
  });
}

const { data: childrenCatalogs, error: childrenCatalogsError } = await useFetch(
  `/api/pages/catalog/${slug}`,
);

if (childrenCatalogsError.value) {
  throw createError({
    statusCode: 404,
  });
}

watch(childrenCatalogs, () => {
  isLoading.value = false;
});

useSeoMeta({
  title: childrenCatalogs.value?.dataParentCategory.seo.titleSeo,
  description: childrenCatalogs.value?.dataParentCategory.seo.descriptionSeo,
});

//
const titleChange = computed(() => {
  return slug === 'zoloto' ? 'золота' : 'серебра';
});
</script>

<template>
  <div>
    <UiLoading v-if="isLoading" />

    <UiBreadCrumbs :links="[{ title: 'Каталог' }]" />

    <div class="catalog">
      <div class="container">
        <div class="catalog__header">
          <h1 class="h2_72">Каталог изделий из {{ titleChange }}</h1>

          <ul class="catalog__header_list">
            <template v-for="link in parentCatalogs" :key="link.databaseId">
              <li
                v-if="link.count"
                :class="[
                  'catalog__header_list_item',
                  `catalog__header_list_item_${link.slug}`,
                  { active: slug === link.slug },
                ]"
              >
                <NuxtLink :to="`/catalog/${link.slug}`" @click="isLoading = true">
                  <span class="catalog__header_title">{{ link.name }}</span>
                  <ImagesFigureStar class="catalog__header_star" />
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>

        <ul class="catalog_children_list">
          <template v-for="item in childrenCatalogs?.childrenCategories" :key="item.databaseId">
            <CatalogCategoryItem v-if="item.count" :parent-category-name="slug" :category="item" />
          </template>
        </ul>
      </div>
    </div>

    <div class="container">
      <SlidersPopularProducts />
    </div>

    <div
      v-if="childrenCatalogs?.dataParentCategory.catalogPageContent.opisanieKategorii"
      v-html="childrenCatalogs.dataParentCategory.catalogPageContent.opisanieKategorii"
      class="container catalog_wp"
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
  border-radius: 20px;
  overflow: hidden;

  /*  */
  &.catalog__header_list_item_zoloto {
    background-color: var(--main--sand);
  }

  &.catalog__header_list_item_serebro {
    background-color: var(--low-green);
  }

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
    .catalog__header_star {
      opacity: 0;
      position: absolute;
      right: 20px;
      bottom: 20px;
      color: #cecfcd;
      transition: opacity var(--transition-speed);

      /*  */
      @media (hover: hover) {
        a:hover & {
          opacity: 1;
        }
      }

      /*  */
      a.active & {
        color: var(--main-green);
        opacity: 1;
      }

      /*  */
      @media (max-width: 600px) {
        right: 10px;
        bottom: 10px;
        width: 43px;
        height: 43px;
      }
    }

    /*  */
    &.active {
      pointer-events: none;
      user-select: none;
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
.catalog_wp {
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
