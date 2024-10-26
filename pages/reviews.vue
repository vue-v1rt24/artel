<script setup lang="ts">
import type { TypeReview } from '~/types/pages/reviews.types';

// Будет храниться значение следующей страницы (для кнопки показать ещё)
const nextPage = ref('');
const reviewsArr = ref<TypeReview[]>([]);

//
const { data: reviews, status } = await useFetch('/api/pages/reviews', {
  query: { nextPage },
  watch: [nextPage],
});

// console.log(reviews.value);

// Помещаем пришедшие данные в переменную
if (reviews.value?.reviews) {
  reviewsArr.value = reviews.value.reviews;
}

//
const viewport = useViewport();

//
useSeoMeta({
  title: 'Отзывы и благодарности',
  // description: '',
});

//
const modal = useTemplateRef('modal');
const reviewData = ref<TypeReview | null>(null); // будут данные отзыва для вывода в модальном окне

// Открытие модального окна
const readComment = (review: TypeReview) => {
  reviewData.value = review;
  modal.value?.modalOpen();
};

// Загрузка отзывов (постраничная навигация)
const loadNextPage = () => {
  if (reviews.value?.pagination.endCursor) {
    nextPage.value = reviews.value.pagination.endCursor;
  }
};

//
watch(status, (val) => {
  if (val === 'pending') {
    console.log('pending');
  } else if (val === 'success' && reviews.value?.reviews) {
    reviewsArr.value.push(...reviews.value.reviews);
    console.log('success');
  }
});
</script>

<template>
  <div class="reviews">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Отзывы и благодарности' }]" />

    <!--  -->
    <div class="container">
      <h1 class="h2_72">Отзывы и благодарности</h1>

      <!--  -->
      <div class="reviews__text">
        <div class="reviews__text_item">
          <h2 class="h3_32">
            Будем рады, если Вы ознакомитесь с отзывами, которые оставляют о нас наши клиенты
          </h2>

          <p class="p_20">
            Спасибо всем, кто делится с нами впечатлениями о наших украшениях, а также работе
            ювелирных экспертов и мастеров.
          </p>
        </div>

        <div v-if="viewport.isGreaterThan('screen576')" class="reviews__text_img">
          <img src="/images/reviews/logo_yandex.svg" alt="" />
        </div>
      </div>

      <!--  -->
      <ul class="reviews_list">
        <ReviewsItem
          v-for="review in reviewsArr"
          :key="review.databaseId"
          :review
          @read-comment="readComment(review)"
        />
      </ul>

      <!--  -->
      <UiButton
        v-if="reviews?.pagination.hasNextPage"
        title="Показать ещё"
        width="100%"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        @btn-click="loadNextPage"
      />

      <!--  -->
      <div class="reviews__leave">
        <div class="reviews__leave_title">
          Вы также можете оставить отзыв о сотрудничестве, и мы обязательно его опубликуем
        </div>

        <div class="reviews__leave_img">
          <img src="/images/reviews/ya_big.svg" alt="" />
          <img src="/images/reviews/2gis_big.svg" alt="" />
        </div>
      </div>
    </div>

    <!--  -->
    <UiModal id-modal="review_modal" ref="modal">
      <ModalTemplateShell>
        <ModalTemplateReview v-if="reviewData" :review="reviewData" />
      </ModalTemplateShell>
    </UiModal>
  </div>
</template>

<style lang="css" scoped>
.reviews__text {
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  margin: 80px 0 60px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 60px 0 52px 0;
  }

  @media (max-width: 768px) {
    margin: 42px 0 52px 0;
  }

  @media (max-width: 576px) {
    margin: 32px 0 42px 0;
  }
}

/*  */
.h3_32 {
  max-width: 803px;
  margin-bottom: 42px;

  /*  */
  @media (max-width: 1280px) {
    max-width: 670px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    max-width: 530px;
    font-size: 22px;
    margin-bottom: 24px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
}

/*  */
.p_20 {
  max-width: 705px;

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
}

/*  */
.reviews__text_img {
  flex-shrink: 0;
  width: 97px;
  margin-top: -6px;

  /*  */
  @media (max-width: 768px) {
    width: 69px;
  }
}

/*  */
.reviews_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;

  /*  */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

/*  */

.reviews .btn {
  margin-top: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 52px;
  }

  @media (max-width: 576px) {
    margin-top: 32px;
  }
}

/*  */

.reviews__leave {
  background-color: var(--main--sand);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 62px;
  margin-top: 120px;

  /*  */
  @media (max-width: 1280px) {
    margin-top: 100px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    row-gap: 42px;
  }

  @media (max-width: 768px) {
    padding: 42px;
  }

  @media (max-width: 576px) {
    row-gap: 28px;
    padding: 28px;
    margin-top: 60px;
  }
}

/*  */
.reviews__leave_title {
  max-width: 823px;
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;
  color: var(--main-green);

  /*  */
  @media (max-width: 1400px) {
    max-width: 509px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
}

/*  */
.reviews__leave_img {
  display: flex;
  column-gap: 24px;

  /*  */
  @media (max-width: 768px) {
    column-gap: 32px;

    /*  */
    img {
      width: 62px;
    }
  }

  @media (max-width: 576px) {
    column-gap: 24px;

    /*  */
    img {
      width: 52px;
    }
  }
}
</style>
