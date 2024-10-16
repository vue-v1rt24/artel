<script setup lang="ts">
import type { TypeCatalog } from '~/types/pages/catalog.types';
import { SortEnum } from '~/server/types/pages/catalog.types';
import '~/assets/css/return-styles-wp.css';

//
const { slug, slugcat } = useRoute().params as { slug: string; slugcat: string };

if (!slug && !slugcat) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Параметры не переданы',
  });
}

// console.log(slug, slugcat);

// Получаем данные подкатегории
const selectSortVal = ref<string | null>(null); // будет значение сортировки

const { data: category, error } = await useFetch<TypeCatalog>(
  `/api/pages/catalog/subcategory/${slugcat}`,
  {
    query: { sort: selectSortVal },
    watch: [selectSortVal],
  },
);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Запись не найдена',
  });
}

// console.log(category.value);

// Мета данные
useSeoMeta({
  title: category.value?.dataCategory.seo.titleSeo,
  description: category.value?.dataCategory.seo.descriptionSeo,
});

// Значения для селекта
const selectOptions = [SortEnum.POPULAR, SortEnum.PRICE_UP, SortEnum.PRICE_DOWN];

// Получаем название подкатегории
const catName = computed(() => (slug === 'zoloto' ? 'Золото' : 'Серебро'));

// Получаем значение сортировки
const selectValHandler = (val: string) => {
  selectSortVal.value = val;
};

// Изменение количества карточек товаров на странице
const sizeCards = (val: string) => {
  console.log(val);
};
</script>

<template>
  <div class="subcategory">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      :links="[
        { title: 'Каталог', link: '/catalog/zoloto' },
        { title: catName, link: `/catalog/${slug}` },
        { title: category?.subCategory.name || '' },
      ]"
    />

    <!-- Содержание -->
    <div class="container">
      <h1 class="h2_72">{{ category?.subCategory.name }}</h1>

      <!-- Сортировка -->
      <div class="sort">
        <UiSelect :options="selectOptions" @select-option-val="selectValHandler" />

        <CatalogButtonsSize @size-cards="sizeCards" />
      </div>

      <!-- Вывод товаров -->
      <ul class="products">
        <li v-for="product in category?.products" :key="product.databaseId" class="products__item">
          <CatalogProductCard :product />
        </li>
      </ul>

      <!-- Кнопка "Показать ещё" -->
      <UiButton
        width="100%"
        title="Показать ещё"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        class="load_more"
      />

      <!-- Описание категории -->
      <div
        v-if="category?.dataCategory.catalogPageContent.opisanieKategorii"
        v-html="category.dataCategory.catalogPageContent.opisanieKategorii"
        class="subcategory__desc wp_content"
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
}

/*  */
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/*  */
.load_more {
  margin-top: 60px;
}

/*  */
.subcategory__desc {
  margin-top: 150px;

  /*  */
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
