<script setup lang="ts">
const { slug } = useRoute().params as { slug: string };

//
const { data: product, error } = await useFetch(`/api/pages/product/${slug}`);

if (error.value || !product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Товар не найден',
  });
}

console.log(product.value);

// Мета данные
useSeoMeta({
  title: product.value?.seo.titleSeo,
  description: product.value?.seo.descriptionSeo,
});

// Атрибуты
const attributes: any = {
  pa_metall: 'Металл',
  pa_proba: 'Проба',
  pa_kamen: 'Камень',
  pa_ves: 'Вес, г',
};

// Клик по кнопке
const orderHandler = () => {
  console.log('Заказ');
};
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      :links="[
        { title: 'Каталог', link: '/catalog/zoloto' },
        {
          title: product?.productCategories[0]?.name || 'Нет категории',
          link: `/catalog/${product?.productCategories[0]?.slug}`,
        },
        {
          title: product?.productCategories[1]?.name || 'Нет категории',
          link: `/catalog/${product?.productCategories[0]?.slug}/${product?.productCategories[1]?.slug}`,
        },
        { title: product?.name || 'Нет названия товара' },
      ]"
    />

    <!--  -->
    <div class="container">
      <div class="product">
        <div class="product__gallery">
          <ProductGallery
            v-if="product?.galleryImages.nodes"
            :images="product.galleryImages.nodes"
          />
        </div>

        <!--  -->
        <div class="product__desc">
          <div class="product__sku">Артикул {{ product?.sku }}</div>

          <!--  -->
          <h1 class="product__title">{{ product?.name }}</h1>

          <!--  -->
          <div v-if="product?.price" class="product__price_bx">
            <span class="product__price">{{ priceFormatter(+product.price) }}</span>

            <s class="product__price_del">{{ priceFormatter(+product.regularPrice) }}</s>

            <div class="product__price_sale">
              -{{ discountPercentage(+product.regularPrice, +product.salePrice) }}
            </div>
          </div>

          <!--  -->
          <ul class="attributes_list">
            <li
              v-for="attr in product?.defaultAttributes.nodes"
              :key="attr.value"
              class="attributes_item"
            >
              <span class="attributes_item_name">{{ attributes[attr.name] }}</span>
              <span class="attributes_item_val">{{ attr.value }}</span>
            </li>
          </ul>

          <!--  -->
          <UiButton title="Узнать наличие" width="100%" @btnClick="orderHandler" />
        </div>
      </div>

      <!--  -->
      <!-- <SlidersPopularProducts /> -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.product {
  display: flex;
  column-gap: 60px;
  justify-content: space-between;
  margin-bottom: 150px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
}

/*  */
.product__sku {
  font-weight: 200;
  font-size: 16px;
  line-height: 90%;
  color: var(--gray-text);
}

/*  */
.product__title {
  font-weight: 400;
  font-size: 42px;
  line-height: 120%;
  color: var(--main-green);
  margin: 26px 0 32px 0;
}

/*  */
.product__price_bx {
  display: flex;
  align-items: center;
}

.product__price {
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: var(--main-green);
}

.product__price_del {
  font-weight: 300;
  font-size: 26px;
  line-height: 100%;
  color: #d7dcdc;
  margin: 0 24px 0 32px;
}

.product__price_sale {
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 20px;
  padding: 6px 5px;
}

/*  */
.attributes_list {
  margin: 42px 0 52px 0;
}

.attributes_item {
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  display: flex;
  column-gap: 50px;

  /*  */
  &:not(:last-child) {
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
}

.attributes_item_name {
  width: 110px;
  color: var(--gray-text);
}

.attributes_item_val {
  color: var(--main-green);
}
</style>
