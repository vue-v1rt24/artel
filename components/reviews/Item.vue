<script setup lang="ts">
import { EnumFrom } from '~/server/types/pages/reviews.types';
import type { TypeReview } from '~/types/pages/reviews.types';

const props = defineProps<{
  review: TypeReview;
}>();

//
const emit = defineEmits<{
  readComment: [];
}>();

//
const viewport = useViewport();
const countRows = useTemplateRef('countRows');

//
const lineRows = ref(4);

//
const imgFrom = computed(() => {
  const title = props.review.rewiewsTypeName.reviewsRepeatOtkudaOtzyv;

  return title === EnumFrom.ЯНДЕКС
    ? '/images/reviews/yandex.svg'
    : title === EnumFrom['2ГИС']
    ? '/images/reviews/2gis.svg'
    : '/images/reviews/yandex.svg';
});

const countRowsComputed = computed(() => {
  if (!countRows.value) return null;

  return countingRows(countRows.value) - 1;
});

//
watchEffect(() => {
  if (viewport.isLessThan('screen576')) {
    lineRows.value = 6;
  } else {
    lineRows.value = 4;
  }
});
</script>

<template>
  <li class="reviews_list__item">
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
    <div
      :class="{ reviews_list__item_overflow: countRowsComputed && countRowsComputed > lineRows }"
    >
      <p class="reviews_list__item_desc" ref="countRows">
        {{ review.rewiewsTypeName.reviewsRepeatKommentarij }}
      </p>

      <UiButton
        v-if="countRowsComputed && countRowsComputed > lineRows"
        title="Читать"
        width="90px"
        font-size="18px"
        bg="var(--main--sand)"
        text-color="var(--main-green)"
        @btn-click="emit('readComment')"
      />
    </div>
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
  display: flex;
  column-gap: 6px;
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
.reviews_list__item_overflow {
  display: flex;
  align-items: flex-end;

  /*  */
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 14px;
  }

  /*  */
  .btn {
    height: 27px;
    flex-shrink: 0;

    /*  */
    @media (max-width: 576px) {
      width: 100%;
    }
  }
}

.reviews_list__item_desc {
  font-weight: 200;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: v-bind(lineRows);
  -webkit-box-orient: vertical;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
    -webkit-line-clamp: 6;
  }
}
</style>
