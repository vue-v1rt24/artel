<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { TypeProductOrder } from '~/types/productOrder.types';

defineProps<{
  specials: TypeProductOrder[];
}>();

//
const swiperInstance = ref<Swiper | null>(null);
const modal = useTemplateRef('modal');
const dataModal = ref<TypeProductOrder | null>(null);

const productAvailability = (special: TypeProductOrder) => {
  dataModal.value = special;
  modal.value?.modalOpen();
};

//
onMounted(() => {
  swiperInstance.value = new Swiper('.special_swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    speed: 1000,

    pagination: {
      el: '.swiper-special-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-special-button-next',
      prevEl: '.swiper-special-button-prev',
    },
  });
});

onUnmounted(() => {
  if (swiperInstance.value && swiperInstance.value.destroy) {
    swiperInstance.value.destroy();
    swiperInstance.value = null;
  }
});
</script>

<template>
  <div class="special">
    <h2 class="h2_56">Специальные предложения</h2>

    <!-- <NuxtImg
      class="special_figure"
      src="/images/special-figure.svg"
      loading="lazy"
      densities="x1"
      alt=""
    /> -->
    <img class="special_figure" src="/images/special-figure.svg" loading="lazy" alt="" />

    <!--  -->
    <div class="special_swiper swiper">
      <div class="swiper-wrapper sdvig">
        <template v-for="special in specials" :key="special.id">
          <div v-if="special.img" class="swiper-slide">
            <!-- <NuxtImg
              class="special_swiper__img"
              format="avif, webp"
              :src="special.img"
              densities="x1"
              loading="lazy"
              alt=""
            /> -->
            <img class="special_swiper__img" :src="special.img" loading="lazy" alt="" />

            <!--  -->
            <div class="special__info_bx">
              <div class="special__info">
                <div class="special__price_bx">
                  <div class="special__price">
                    {{ priceFormatter(+special.price) }}
                  </div>

                  <div v-if="special.isOnSale" class="special_price__old_bx">
                    <s class="special_price__old">{{ priceFormatter(+special.regularPrice) }}</s>

                    <div class="sale_text">
                      Скидка {{ discountPercentage(+special.regularPrice, +special.salePrice) }}
                    </div>
                  </div>
                </div>

                <div class="name_product">{{ special.title }}</div>
              </div>

              <!--  -->
              <UiButton
                width="278px"
                title="Узнать подробнее"
                class="special__info_btn"
                @btn-click="productAvailability(special)"
              />
            </div>
          </div>
        </template>
      </div>

      <div class="swiper-special-pagination"></div>

      <div class="swiper-btn swiper-special-button-prev"></div>
      <div class="swiper-btn swiper-special-button-next"></div>
    </div>
  </div>

  <Teleport to="body">
    <UiModal id-modal="fa-modal" ref="modal">
      <ModalTemplateShell>
        <ModalTemplateFindAvailability
          form-class="form-valid-special"
          title="Узнайте о наличии товара:"
          subject="Узнать о наличии товара"
          :special="dataModal"
        />
      </ModalTemplateShell>
    </UiModal>
  </Teleport>
</template>

<style lang="css" scoped>
.special {
  position: relative;
  margin-bottom: 105px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
}

/*  */
.special .h2_56 {
  position: absolute;
  top: 10px;
  left: 0;

  /*  */
  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 576px) {
    max-width: 150px;
  }
}

/*  */
.special_figure {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  pointer-events: none;
  z-index: -1;

  /*  */
  @media (max-width: 1280px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 550px;
    margin-top: -75px;
  }

  @media (max-width: 576px) {
    max-width: 280px;
    margin-top: -65px;
  }
}

/*  */
.special_swiper {
  height: 864px;

  /*  */
  @media (max-width: 1280px) {
    height: 808px;
  }

  @media (max-width: 768px) {
    height: 760px;
  }

  @media (max-width: 576px) {
    height: 513px;
  }
}

.special_swiper .swiper-slide {
  display: grid;
  place-content: center;
}

/*  */
.special_swiper__img {
  mix-blend-mode: darken;
}

/*  */
.special__info_bx {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  /*  */
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

/*  */
.special__price_bx {
  display: flex;
  align-items: center;
  column-gap: 24px;

  /*  */
  @media (max-width: 576px) {
    column-gap: 12px;
  }
}

.special__price {
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  color: var(--main-green);

  /*  */
  @media (max-width: 576px) {
    font-size: 20px;
  }
}

.special_price__old_bx {
  display: flex;
  align-items: center;
  column-gap: 24px;

  /*  */
  @media (max-width: 576px) {
    width: 100%;
  }
}

.special_price__old {
  font-weight: 300;
  font-size: 24px;
  line-height: 100%;
  color: var(--light-gray2);

  /*  */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.sale_text {
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  color: var(--main-green);
  background: var(--main--sand);
  border-radius: 20px;
  padding: 8px 10px;

  /*  */
  @media (max-width: 576px) {
    font-size: 12px;
    margin-left: auto;
  }
}

/*  */
.name_product {
  max-width: 345px;
  font-weight: 300;
  font-size: 28px;
  line-height: 140%;
  text-wrap: balance;
  color: var(--main-green);
  margin-top: 24px;

  /*  */
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 24px;
    margin-bottom: 42px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin: 12px 0 24px 0;
  }
}

/*  */
.special__info_btn {
  margin-top: auto;

  /*  */
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    border-radius: 16px;
  }
}

/*  */
.swiper-special-button-prev,
.swiper-special-button-next {
  position: absolute;
  top: 50%;
  width: 68px;
  height: 68px;
  z-index: 1;

  /*  */
  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    background-size: 56px;
    margin-top: -105px;
  }

  @media (max-width: 576px) {
    display: none;
  }
}

.swiper-special-button-prev {
  left: 0;
  rotate: 180deg;
}

.swiper-special-button-next {
  right: 0;
}

/*  */
.swiper-special-pagination {
  position: absolute;
  top: 30px;
  left: auto;
  right: 0;

  width: fit-content;
  height: fit-content;

  font-family: var(--font-family);
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 22px;

  pointer-events: none;

  /*  */
  @media (max-width: 1280px) {
    top: 12px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 18px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    padding: 6px 14px;
  }
}

/* Анимация изображения слайда */
.special_swiper__img {
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;

  /*  */
  @media (max-width: 768px) {
    max-width: 380px;
    margin-top: -168px;
  }

  @media (max-width: 576px) {
    max-width: 230px;
    margin-top: -140px;
  }
}

.swiper-slide-active .special_swiper__img {
  transform: scale(1);
  opacity: 1;
  transition: transform 1s, opacity 1s;
  transition-delay: 0.15s;
}
</style>
