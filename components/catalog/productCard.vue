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
        <!-- <NuxtImg
          :src="product.image?.mediaItemUrl"
          densities="x1"
          format="avif, webp"
          loading="lazy"
          alt=""
        /> -->
        <img :src="product.image?.mediaItemUrl" loading="lazy" alt="" />
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
.product {
  position: relative;

  /*  */
  &:hover .product__title {
    text-decoration: underline var(--main-green) 0.5px;
    text-decoration-skip-ink: none;
  }

  &:hover .product__img::before {
    left: 150%;
    transition: left calc(var(--transition-speed) * 3);
  }
}

/*  */
.product__img {
  position: relative;
  background-color: var(--low-green);
  aspect-ratio: 1;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
  margin-bottom: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 18px;
  }

  @media (max-width: 576px) {
    padding: 10px;
    margin-bottom: 12px;
  }

  /*  */
  img {
    mix-blend-mode: darken;
  }
}

.product__img::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 20px;
  height: 100%;
  background-color: white;
  transform: skewX(-30deg);
  filter: blur(10px);
  box-shadow: 0 0 10px 0 white, 0 0 20px 0 white, 0 0 30px 0 white, 0 0 50px 0 white,
    0 0 80px 0 white, 0 0 100px 0 white;
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
