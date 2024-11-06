<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui';

import Swiper from 'swiper';
import 'swiper/css';

//
const { data: actual } = await useFetch('/api/pages/news/actual');

// console.log(actual.value);

// console.log(new Date(2024, 10, 4));
// console.log(new Date(2024, 10, 18));

// 1 209 600 000   /   1 209 600 000

// console.log(new Date(2024, 10, 18).getTime() - new Date(2024, 10, 4).getTime());

//
const swiperActual = ref<Swiper | null>(null);

// Элементы управления плеером
const foo = () => {
  const actualModal = document.querySelector('.actual_modal');
  console.log(actualModal);
};
// /Элементы управления плеером

//
onMounted(async () => {
  swiperActual.value = new Swiper('.swiper-actual', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
      360: {
        spaceBetween: 20,
      },
      769: {
        spaceBetween: 30,
      },
    },
  });

  //
  await nextTick();
  Fancybox.bind(`[data-fancybox="actual-video"]`, {
    Thumbs: false,
    Hash: false,
    Toolbar: {
      display: {
        left: [''],
        middle: [],
        right: ['close'],
      },
    },
    Carousel: {
      Panzoom: {
        touch: false,
      },
    },
    idle: false,
    mainClass: 'actual_modal',
    Html: {
      videoTpl: `<div class="actual_player_bx">
                  <video class="fancybox__html5video actual_player" loop poster="{{poster}}">
                    <source src="{{src}}" type="{{format}}" />
                    К сожалению, ваш браузер не поддерживает встроенные видео.
                  </video>

                  <div type="button" class="actual_player_btn_control actual_player__play"><img src="/images/play-button.svg" /></div>
                  <div type="button" class="actual_player_btn_control actual_player__pause"><img src="/images/pause-button.svg" /></div>
                  <input type="range" class="actual_player__volume" />
                </div>`,
      videoAutoplay: true,
    },
    tpl: {
      closeButton:
        '<buton type="button" data-fancybox-close class="actual_modal__ntn_close"><img src="/images/close-fon-selver.svg"/></buton>',
    },
    on: {
      'Carousel.ready Carousel.change': (fancybox: any, slide: any) => {
        const currentSlide = fancybox.getSlide();

        if (fancybox.isCurrentSlide(currentSlide)) {
          currentSlide.contentEl.addEventListener('click', (evt: Event) => {
            const target = evt.target as HTMLElement;
            console.log(target);
          });
        }
      },
    },
  });
});

//
onUnmounted(() => {
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }

  if (swiperActual.value && swiperActual.value.destroy) {
    swiperActual.value.destroy();
  }
});
</script>

<template>
  <div class="actual_bx">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Новости' }]" />

    <div class="container">
      <h2 class="h2_56">Актуальное</h2>
    </div>

    <!--  -->
    <div class="swiper-actual swiper">
      <div class="swiper-wrapper">
        <div v-for="video in actual" :key="video.databaseId" class="swiper-slide">
          <a
            :href="video.actualGroupField.actualVideo?.node.mediaItemUrl"
            data-fancybox="actual-video"
            data-width="513"
            data-height="911"
            class="swiper_actual__link"
          >
            <NuxtImg
              :src="video.actualGroupField.actualIzobrazhenieDlyaVideo?.node.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              loading="lazy"
            />

            <div class="swiper_actual__date">1 час назад</div>
          </a>

          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.swiper-actual {
  padding: 0 40px;
  margin-top: 60px;

  /*  */
  @media (min-width: 1680px) {
    padding: 0 40px 0 50%;
    margin-left: -803px;
  }

  @media (max-width: 1280px) {
    margin-top: 52px;
  }

  @media (max-width: 768px) {
    margin-top: 42px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
    margin-top: 32px;
  }
}

/*  */
.swiper-slide {
  width: 242px;

  /*  */
  @media (max-width: 1280px) {
    width: 175px;
  }

  @media (max-width: 576px) {
    width: 150px;
  }
}

/*  */
.swiper_actual__link {
  position: relative;
  height: 430px;
  display: block;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;

  /*  */
  @media (max-width: 1280px) {
    height: 311px;
    border-radius: 20px;
  }

  @media (max-width: 576px) {
    height: 267px;
  }

  /*  */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(23, 45, 45, 0.6);
    background-image: url(/images/play-button.svg);
    background-repeat: no-repeat;
    background-position: 30px center;
    opacity: 0;
    transition: background-position-x var(--transition-speed), opacity var(--transition-speed);
  }

  &:hover::before {
    background-position-x: center;
    opacity: 1;
  }

  /*  */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*  */
.swiper_actual__date {
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: var(--main-green);
  background-color: white;
  border-radius: 50px;
  padding: 12px 16px;
  pointer-events: none;

  /*  */
  @media (max-width: 1280px) {
    top: 18px;
    left: 18px;
    font-size: 13px;
    padding: 8px 12px;
  }

  @media (max-width: 576px) {
    top: 12px;
    left: 12px;
    font-size: 12px;
  }
}

/*  */
.actual_modal {
  /*  */
  :global(.fancybox__content) {
    background-color: transparent;
    padding: 0;
  }

  /*  */
  :global(.fancybox__html5video) {
    border-radius: 24px;

    @media (max-width: 567px) {
      border-radius: 20px;
    }
  }

  /*  */
  :global(.f-button) {
    background-color: white;

    /*  */
    @media (max-width: 576px) {
      width: 30px;
      height: 30px;
    }
  }

  @media (hover: hover) {
    :global(.f-button:hover:not([disabled])) {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  @media (hover: none) {
    :global(.f-button:active:not([disabled])) {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  :global(.is-horizontal .fancybox__nav .f-button.is-prev) {
    left: 50%;
    margin-left: -247px;

    /*  */
    @media (max-width: 576px) {
      margin-top: 305px;
      margin-left: -152px;
    }
  }

  :global(.is-horizontal .fancybox__nav .f-button.is-next) {
    right: 50%;
    margin-right: -247px;

    /*  */
    @media (max-width: 576px) {
      margin-top: 305px;
      margin-right: -152px;
    }
  }

  :global(.f-button svg) {
    color: var(--main-green);
    filter: none;

    /*  */
    @media (max-width: 576px) {
      width: 15px;
    }
  }

  /*  */
  :global(.actual_modal__ntn_close) {
    position: absolute;
    top: 0;
    right: -100px;
    cursor: pointer;

    /*  */
    @media (max-width: 768px) {
      right: -90px;
      width: 46px;
    }

    @media (max-width: 576px) {
      top: -57px;
      right: 0px;
      width: 38px;
    }
  }
}

/* Кнопки плеера */
:global(.actual_player_bx) {
  position: relative;
}

:global(.actual_player) {
}

:global(.actual_player_btn_control) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
}

:global(.actual_player__play) {
  :global(img) {
    width: 100px;
  }
}

:global(.actual_player__pause) {
}
</style>
