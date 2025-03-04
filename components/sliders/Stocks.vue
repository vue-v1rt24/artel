<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import type { TypeStocksSlider } from '~/types/sliderStocks.types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//
const { stocks } = defineProps<{
  stocks?: TypeStocksSlider[];
}>();

// console.log(stocks);

//
const viewport = useViewport();

//
const swiperInstance = ref<Swiper | null>(null);

//
onMounted(() => {
  swiperInstance.value = new Swiper('.swiper_stocks', {
    modules: [Navigation, Pagination],

    loop: true,

    navigation: {
      nextEl: '.swiper-button-white-next',
      prevEl: '.swiper-button-white-prev',
    },

    pagination: {
      el: '.swiper-stock-pagination',
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value && swiperInstance.value.destroy) {
    swiperInstance.value.destroy();
  }
});
</script>

<template>
  <div class="swiper_stocks swiper">
    <div class="swiper-wrapper">
      <div v-for="stock in stocks" :key="stock.id" class="swiper-slide">
        <NuxtLink
          v-if="stock.linkOtherSite"
          :to="stock.linkOtherSite"
          external
          target="_blank"
          class="link_Other_Site"
        >
          <img
            v-if="viewport.isGreaterOrEquals('screen768')"
            :src="stock.img1600"
            loading="lazy"
            alt=""
          />

          <img v-if="viewport.isLessThan('screen768')" :src="stock.img688" loading="lazy" alt="" />
        </NuxtLink>

        <NuxtLink v-else :to="`/stocks/${stock.slug}`">
          <img
            v-if="viewport.isGreaterOrEquals('screen768')"
            :src="stock.img1600"
            loading="lazy"
            alt=""
          />

          <img v-if="viewport.isLessThan('screen768')" :src="stock.img688" loading="lazy" alt="" />
        </NuxtLink>
      </div>
    </div>

    <!--  -->
    <div class="swiper-stock-pagination"></div>

    <!--  -->
    <div class="stock_arrow swiper-button-white-prev">
      <div class="stock_arrow__circle"><ImagesArrowBgWhite /></div>
    </div>

    <div class="stock_arrow swiper-button-white-next">
      <div class="stock_arrow__circle"><ImagesArrowBgWhite /></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.swiper-slide {
  aspect-ratio: 1 / 0.401;

  /*  */
  @media (max-width: 767px) {
    aspect-ratio: 1;
  }
}

.swiper-slide img {
  border-radius: 32px;
}

/*  */
.stock_arrow {
  position: absolute;
  top: 0;
  z-index: 1;

  width: 120px;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color var(--transition-speed);

  /*  */
  @media (max-width: 1280px) {
    width: 96px;
  }

  @media (max-width: 576px) {
    width: 58px;
  }
}

.stock_arrow:hover {
  background-color: rgba(255, 255, 255, 0.3);

  /*  */
  .stock_arrow__circle {
    opacity: 1;
  }
}

/*  */
.stock_arrow__circle {
  width: 56px;
  height: 56px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  transition: opacity var(--transition-speed);

  /*  */
  @media (max-width: 1280px) {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }
}

/*  */
.stock_arrow .arrow_stock {
  @media (max-width: 1280px) {
    width: 48px;
  }

  @media (max-width: 576px) {
    width: 30px;
  }
}

/*  */
.stock_arrow.swiper-button-white-next {
  right: 0;
}

.stock_arrow.swiper-button-white-next .arrow_stock {
  transform: rotate(180deg);
}

/*  */
.swiper-stock-pagination {
  position: absolute;
  bottom: 20px;
  z-index: 1;
  text-align: center;

  /*  */
  @media (max-width: 576px) {
    bottom: 14px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
  }
}

.swiper-stock-pagination :global(.swiper-pagination-bullet) {
  width: 13px;
  height: 13px;
  background-color: white;
  opacity: 1;
  margin: 0 8px !important;

  /*  */
  @media (max-width: 576px) {
    width: 8px;
    height: 8px;
    margin: 0 5px !important;
  }
}

.swiper-stock-pagination :global(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  width: 23px;
  background-color: var(--main-green);
  border-radius: 8px;

  /*  */
  @media (max-width: 576px) {
    width: 14px;
  }
}

/*  */

.link_Other_Site {
  position: absolute;
  inset: 0;
}
</style>
