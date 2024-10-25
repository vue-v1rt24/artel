<script setup lang="ts">
import { EnumFrom } from '~/server/types/pages/reviews.types';

const props = defineProps<{
  review: {
    databaseId: number;
    date: string;
    rewiewsTypeName: {
      reviewsRepeatImyaFamiliya: string;
      reviewsRepeatKolichestvoZvyozd: number;
      reviewsRepeatKommentarij: string;
      reviewsRepeatOtkudaOtzyv: EnumFrom;
      reviewsRepeatIzobrazhenie: {
        node: {
          mediaItemUrl: string;
        };
      };
    };
  };
}>();

//
const imgFrom = computed(() => {
  const title = props.review.rewiewsTypeName.reviewsRepeatOtkudaOtzyv;

  return title === EnumFrom.ЯНДЕКС
    ? '/images/reviews/yandex.svg'
    : title === EnumFrom['2ГИС']
    ? '/images/reviews/2gis.svg'
    : '/images/reviews/yandex.svg';
});
</script>

<template>
  <li class="reviews_list__item">
    <div class="reviews_list__item_top">
      <div class="reviews_list__item_top_img">
        <NuxtImg
          :src="review.rewiewsTypeName.reviewsRepeatIzobrazhenie.node.mediaItemUrl"
          format="avif, webp"
          densities="x1"
          sizes="s576:80px s360:60px"
        />

        <NuxtImg
          :src="imgFrom"
          densities="x1"
          sizes="s576:32px s360:22px"
          class="reviews_list__item_top_img_from"
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
    <p class="reviews_list__item_desc">{{ review.rewiewsTypeName.reviewsRepeatKommentarij }}</p>
  </li>
</template>

<style lang="css" scoped>
.reviews_list__item {
  border: 2px solid var(--low-green);
  border-radius: 24px;
  padding: 42px;

  /*  */
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
  @media (max-width: 576px) {
    font-size: 15px;
  }
}

/*  */
.reviews_list__item_top_kto_date {
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  color: var(--gray-text);

  /*  */
  @media (max-width: 576px) {
    font-size: 14px;
  }
}

/*  */
.reviews_list__item_stars {
  margin: 18px 0 24px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 18px 0 24px 0;
  }

  @media (max-width: 576px) {
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
.reviews_list__item_desc {
  height: 100px;
  font-weight: 200;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
  }
}
</style>
