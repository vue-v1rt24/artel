<script setup lang="ts">
import type { TypePopularProduct } from '~/types/popularProducts.types';

defineProps<{
  product: TypePopularProduct;
}>();
</script>

<template>
  <NuxtLink :to="`/product/${product.slug}`">
    <div class="product">
      <div class="product__img">
        <NuxtImg
          :src="product.image.mediaItemUrl"
          densities="x1"
          format="avif, webp"
          sizes="s768:322px s576:280px s360:127px"
          loading="lazy"
        />

        <UiPreloader class="loader" />
      </div>

      <!--  -->
      <div class="price_bx">
        <span class="price">{{ priceFormatter(+product.price) }}</span>

        <div v-if="product.onSale" class="product__sale">
          <s class="product__sale_price">{{ priceFormatter(+product.regularPrice) }}</s>

          <span class="product__sale_discount">
            -{{ discountPercentage(+product.regularPrice, +product.salePrice!) }}
          </span>
        </div>
      </div>

      <!--  -->
      <div class="product__title">{{ product.name }}</div>
    </div>
  </NuxtLink>
</template>

<style lang="css" scoped>
.product__img {
  position: relative;
  height: 378px;
  background-color: var(--low-green);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  /*  */
  @media (max-width: 768px) {
    height: 328px;
    margin-bottom: 18px;
  }

  @media (max-width: 576px) {
    height: 150px;
    margin-bottom: 12px;
  }

  /*  */
  img {
    mix-blend-mode: darken;
  }
}

/*  */
.price_bx {
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 16px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 14px;
  }

  @media (max-width: 576px) {
    column-gap: 12px;
    margin-bottom: 8px;
  }
}

/*  */
.price {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: var(--main-green);

  /*  */
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
}

/*  */
.product__sale {
  display: flex;
  align-items: center;
  column-gap: 26px;

  /*  */
  @media (max-width: 768px) {
    column-gap: 24px;
  }
}

.product__sale_price {
  font-weight: 300;
  font-size: 18px;
  line-height: 100%;
  color: #d7dcdc;

  /*  */
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

/*  */
.product__sale_discount {
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 20px;
  padding: 6px 7px;

  /*  */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 13px;
    background-color: var(--main--sand);
    padding: 4px;
  }
}

/*  */
.product__title {
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 20px;
  line-height: 140%;
  color: var(--main-green);

  /*  */
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
}
</style>
