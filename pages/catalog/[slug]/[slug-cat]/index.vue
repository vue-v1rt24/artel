<script setup lang="ts">
import { SortEnum } from '~/server/types/pages/catalog.types';
import { type TypeProducts, type TypeCatalog, EnumViewCard } from '~/types/pages/catalog.types';
import '~/assets/css/return-styles-wp.css';

//
const { slug, slugcat } = useRoute().params as { slug: string; slugcat: string };

if (!slug && !slugcat) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Параметры не переданы',
  });
}

const selectSortVal = ref<string | null>(null);

const nextPage = ref('');

const products = ref<TypeProducts[]>([]);

const isLoadProducts = ref(false);

const {
  data: category,
  status,
  error,
} = await useFetch<TypeCatalog>(`/api/pages/catalog/subcategory/${slugcat}`, {
  query: { sort: selectSortVal, nextPage },
  watch: [selectSortVal, nextPage],
});

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Запись не найдена',
  });
}

if (category.value?.products) {
  products.value = category.value.products;
}

useSeoMeta({
  title: category.value?.dataCategory.seo.titleSeo,
  description: category.value?.dataCategory.seo.descriptionSeo,
});

const selectOptions = [SortEnum.POPULAR, SortEnum.PRICE_UP, SortEnum.PRICE_DOWN];

const catName = computed(() => (slug === 'zoloto' ? 'Золото' : 'Серебро'));

const selectValHandler = (val: string) => {
  nextPage.value = '';
  selectSortVal.value = val;
};

const viewCard = ref<EnumViewCard>(EnumViewCard.LITTLE);

const sizeCards = (val: EnumViewCard) => {
  viewCard.value = val;
};

const loadMoe = () => {
  if (category.value?.pageInfo.endCursor) {
    isLoadProducts.value = true;
    nextPage.value = category.value.pageInfo.endCursor;
  }
};

watch(
  () => status.value,
  (val) => {
    if (val === 'success' && category.value?.products) {
      if (isLoadProducts.value) {
        products.value.push(...category.value.products);
        isLoadProducts.value = false;
      } else {
        products.value = category.value.products;
      }
    }
  },
);
</script>

<template>
  <div class="subcategory">
    <UiLoading v-if="status === 'pending'" />

    <UiBreadCrumbs
      :links="[
        { title: 'Каталог', link: '/catalog/zoloto' },
        { title: catName, link: `/catalog/${slug}` },
        { title: category?.subCategory.name || '' },
      ]"
    />

    <div class="container">
      <h1 class="h2_72">{{ category?.subCategory.name }}</h1>

      <div class="sort">
        <UiSelect :options="selectOptions" @select-option-val="selectValHandler" />

        <CatalogButtonsSize @size-cards="sizeCards" />
      </div>

      <ul :class="['products', { big: viewCard === EnumViewCard.BIG }]">
        <template v-for="product in products" :key="product.databaseId">
          <li v-if="product.image" class="products__item">
            <CatalogProductCard :product />
          </li>
        </template>
      </ul>

      <UiButton
        v-if="category?.pageInfo.hasNextPage"
        width="100%"
        title="Показать ещё"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        class="load_more"
        @btn-click="loadMoe"
      />

      <div
        v-if="category?.dataCategory.catalogPageContent.opisanieKategorii"
        v-html="category.dataCategory.catalogPageContent.opisanieKategorii"
        class="wp_content subcategory__desc"
      ></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 70px 0 50px 0;
  }

  @media (max-width: 768px) {
    margin: 42px 0 32px 0;
  }

  @media (max-width: 576px) {
    margin: 32px 0 32px 0;
  }
}

/*  */
.sort .select {
  min-width: 203px;

  /*  */
  @media (max-width: 576px) {
    min-width: 166px;
  }
}

/*  */
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  /*  */
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    gap: 24px 20px;
  }

  /*  */
  &.big {
    grid-template-columns: repeat(3, 1fr);

    /*  */
    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

/*  */
.load_more {
  margin-top: 60px;
}

/*  */
.wp_content.subcategory__desc {
  margin-top: 150px;

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
