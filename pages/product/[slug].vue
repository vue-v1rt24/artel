<script setup lang="ts">
import type { TypeProductOrder } from '~/types/productOrder.types';

//
const { slug } = useRoute().params as { slug: string };

//
const { data: product, error } = await useFetch(`/api/pages/product/${slug}`);

if (error.value || !product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Товар не найден',
  });
}

// console.log(product.value);

// Мета данные
useSeoMeta({
  title: product.value?.seo.titleSeo,
  description: product.value?.seo.descriptionSeo,
});

//
const viewport = useViewport();

// Атрибуты
const attributes: any = {
  pa_metall: 'Металл',
  pa_proba: 'Проба',
  pa_kamen: 'Камень',
  pa_ves: 'Вес, г',
};

// Клик по кнопке
const modal = useTemplateRef('modal');
const dataModal = ref<TypeProductOrder | null>(null);

const orderHandler = () => {
  if (!product.value) return;

  dataModal.value = {
    id: product.value.databaseId,
    sku: product.value.sku,
    slug: product.value.slug,
    title: product.value.name,
    img: product.value.galleryImages.nodes[0].mediaItemUrl,
    isOnSale: product.value.onSale,
    price: product.value.price,
    regularPrice: product.value.regularPrice,
    salePrice: product.value.salePrice,
  };

  modal.value?.modalOpen();
};
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs
      v-if="viewport.isGreaterOrEquals('screen768')"
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

    <!-- Кнопка "Вернуться назад" в моб. -->
    <UiGoBackBtn v-else />

    <!--  -->
    <div class="container">
      <div class="product">
        <ProductGallery v-if="product?.galleryImages.nodes" :images="product.galleryImages.nodes" />

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

      <!-- Популярные товары -->
      <SlidersPopularProducts />
    </div>

    <!--  -->
    <Teleport to="body">
      <UiModal id-modal="fa-modal" ref="modal">
        <ModalTemplateShell>
          <ModalTemplateFindAvailability
            form-class="form-product"
            title="Узнайте о наличии товара:"
            subject="Узнать о наличии товара"
            :special="dataModal"
          />
        </ModalTemplateShell>
      </UiModal>
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.product {
  display: grid;
  grid-template-columns: 785px 1fr;
  column-gap: 60px;
  margin-bottom: 150px;

  /*  */
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1280px) {
    column-gap: 30px;
    margin-bottom: 140px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    row-gap: 42px;
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    row-gap: 32px;
    margin-bottom: 60px;
  }
}

/*  */
.product__desc {
  display: flex;
  flex-direction: column;
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

  /*  */
  @media (max-width: 1280px) {
    font-size: 36px;
  }

  @media (max-width: 1280px) {
    font-size: 18px;
    margin: 20px 0 18px 0;
  }
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

  /*  */
  @media (max-width: 576px) {
    font-size: 20px;
  }
}

.product__price_del {
  font-weight: 300;
  font-size: 26px;
  line-height: 100%;
  color: #d7dcdc;
  margin: 0 24px 0 32px;

  /*  */
  @media (max-width: 576px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    margin: 0 auto 0 12px;
  }
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

  /*  */
  @media (max-width: 576px) {
    margin: 28px 0 28px 0;
  }
}

.attributes_item {
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  display: flex;
  column-gap: 50px;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
  }

  /*  */
  &:not(:last-child) {
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
}

.attributes_item_name {
  flex-shrink: 0;
  width: 110px;
  color: var(--gray-text);
}

.attributes_item_val {
  color: var(--main-green);
}

/*  */
.product__desc .btn {
  margin-top: auto;
}
</style>
