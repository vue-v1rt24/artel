<script setup lang="ts">
import { EnumFrom } from '~/server/types/pages/reviews.types';
import type { TypeReview } from '~/types/pages/reviews.types';

const { review } = defineProps<{
  review: TypeReview;
}>();

//
const viewport = useViewport();

//
const imgFrom = computed(() => {
  const title = review.rewiewsTypeName.reviewsRepeatOtkudaOtzyv;

  return title === EnumFrom.ЯНДЕКС
    ? '/images/reviews/yandex.svg'
    : title === EnumFrom['2ГИС']
    ? '/images/reviews/2gis.svg'
    : '/images/reviews/yandex.svg';
});
</script>

<template>
  <div class="reviews_list__item">
    <div class="reviews_list__item_top">
      <div class="reviews_list__item_top_img">
        <NuxtImg
          :src="review.rewiewsTypeName.reviewsRepeatIzobrazhenie.node?.mediaItemUrl"
          format="avif, webp"
          densities="x1"
          sizes="s576:80px s360:60px"
          loading="lazy"
          alt=""
        />

        <NuxtImg
          :src="imgFrom"
          densities="x1"
          sizes="s576:32px s360:22px"
          class="reviews_list__item_top_img_from"
          loading="lazy"
          alt=""
        />
      </div>

      <!--  -->
      <div class="reviews_list__item_top_kto">
        <div class="reviews_list__item_top_kto_name">
          {{ review.rewiewsTypeName.reviewsRepeatImyaFamiliya }}
        </div>

        <div class="reviews_list__item_top_kto_date">
          {{ dateFormatter(review.date) }}
        </div>
      </div>
    </div>

    <!--  -->
    <div class="reviews_list__item_stars">
      <template v-for="star in 5">
        <ImagesStar
          v-if="review.rewiewsTypeName.reviewsRepeatKolichestvoZvyozd >= star"
          color="var(--main-green)"
        />

        <ImagesStar v-else />
      </template>
    </div>

    <!--  -->
    <p class="reviews_list__item_desc">
      {{ review.rewiewsTypeName.reviewsRepeatKommentarij }}
    </p>

    <UiButton
      v-if="viewport.isGreaterOrEquals('screen576')"
      title="Закрыть отзыв"
      width="100%"
      font-size="18px"
      bg="var(--green-50)"
      text-color="var(--main-green)"
      data-fancybox-close
    />
  </div>
</template>

<style lang="css" scoped>
.reviews_list__item {
  @media (max-width: 576px) {
    padding: 24px;
  }
}

/*  */
.reviews_list__item_top {
  display: flex;
  align-items: center;
  column-gap: 20px;

  /*  */
  @media (max-width: 576px) {
    column-gap: 16px;
  }
}

/*  */
.reviews_list__item_top_img {
  position: relative;
  width: 86px;
  flex-shrink: 0;

  /*  */
  @media (max-width: 576px) {
    width: 60px;
  }
}

/*  */
.reviews_list__item_top_img_from {
  position: absolute;
  right: 0;
  bottom: 0;
}

/*  */
.reviews_list__item_top_kto_name {
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  color: var(--main-green);
  margin-bottom: 6px;

  /*  */
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 6px;
  }
}

/*  */
.reviews_list__item_top_kto_date {
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  color: var(--gray-text);

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
}

/*  */
.reviews_list__item_stars {
  display: flex;
  column-gap: 6px;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 28px;
  margin: 28px 0 28px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 24px 0 28px 0;
  }

  @media (max-width: 576px) {
    border-bottom: none;
    padding-bottom: 0;
    margin: 14px 0 20px 0;
  }

  /*  */
  svg {
    width: 30px;

    /*  */
    @media (max-width: 576px) {
      width: 24px;
    }
  }
}

/*  */
.reviews_list__item_overflow {
  display: flex;
  align-items: flex-end;
}

.reviews_list__item_desc {
  font-weight: 200;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);
  margin-bottom: 32px;

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 0;
  }
}
</style>
