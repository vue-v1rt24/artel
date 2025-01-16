<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//
const swiperSlider = ref<Swiper>();

//
defineProps<{
  works: {
    remontDoPosleRepeatIzobrazhenieDo: {
      node: {
        mediaItemUrl: string;
      };
    };
    remontDoPosleRepeatIzobrazheniePosle: {
      node: {
        mediaItemUrl: string;
      };
    };
    remontDoPosleRepeatOpisanie: string;
  }[];
}>();

//
const swiper = useTemplateRef('swiper'); // слайдер
const swiperWrapper = useTemplateRef('swiper-wrapper'); // слайдер
const swiperSlide = ref<HTMLDivElement | null>(null); // будет текущий элемент с классом swiper-slide
const beforeImg = ref<HTMLDivElement | null>(null); // будет текущий элемент с классом before_img
const target = ref<HTMLElement | null>(null); // будет текущий элемент на который нажали

//////// ============== Для ПК
// Перемещение после нажатия на линию
const mousemoveHandler = (evt: MouseEvent) => {
  const transformEl = getComputedStyle(swiperWrapper.value!).transform;
  const matrix = new DOMMatrixReadOnly(transformEl).m41;

  let x = evt.clientX - swiper.value!.offsetLeft - (swiperSlide.value!.offsetLeft - (0 - matrix));

  beforeImg.value!.style.width = x + 'px';
  target.value!.style.left = x + 'px';
};

// По нажатию на линию
const mousedownHandler = (evt: MouseEvent) => {
  target.value = evt.target as HTMLElement;
  const resize = target.value.classList.contains('line_resize');

  if (resize) {
    swiperSlide.value = target.value.closest('.swiper-slide') as HTMLDivElement;
    beforeImg.value = swiperSlide.value.querySelector('.before_img') as HTMLDivElement;

    swiperSlide.value.addEventListener('mousemove', mousemoveHandler);
  }
};

// Сброс событий при отпускании мыши
const mouseupHandler = () => {
  if (!swiper.value) return;
  swiperSlide.value?.removeEventListener('mousemove', mousemoveHandler);
  swiperSlide.value = beforeImg.value = target.value = null;
};
//////// ============== /Для ПК

//////// ============== Для мобильного
// Перемещение после нажатия на линию
const touchmoveHandler = (evt: TouchEvent) => {
  const transformEl = getComputedStyle(swiperWrapper.value!).transform;
  const matrix = new DOMMatrixReadOnly(transformEl).m41;

  let x =
    evt.changedTouches[0].clientX -
    swiper.value!.offsetLeft -
    (swiperSlide.value!.offsetLeft - (0 - matrix));

  if (x < 5) {
    x = 5;
  }

  if (x > swiperSlide.value!.offsetWidth - 5) {
    x = swiperSlide.value!.offsetWidth - 5;
  }

  beforeImg.value!.style.width = x + 'px';
  target.value!.style.left = x + 'px';
};

// При нажатии на линию
const touchstartHandler = (evt: TouchEvent) => {
  target.value = evt.target as HTMLElement;
  const resize = target.value.classList.contains('line_resize');

  if (resize) {
    swiperSlide.value = target.value.closest('.swiper-slide') as HTMLDivElement;
    beforeImg.value = swiperSlide.value.querySelector('.before_img') as HTMLDivElement;

    swiperSlide.value.addEventListener('touchmove', touchmoveHandler);
  }
};

// Сброс событий при отпускании мыши
const touchendHandler = () => {
  if (!swiper.value) return;
  swiperSlide.value?.removeEventListener('touchmove', touchmoveHandler);
  swiperSlide.value = beforeImg.value = target.value = null;
};
//////// ============== /Для мобильного

//
const beforeAfter = () => {
  if (!swiper.value) return;

  // Для ПК
  swiper.value.addEventListener('mousedown', mousedownHandler);
  swiper.value.addEventListener('mouseup', mouseupHandler);
  swiper.value.addEventListener('mouseleave', mouseupHandler);

  // Для мобильного
  swiper.value.addEventListener('touchstart', touchstartHandler);
  swiper.value.addEventListener('touchend', touchendHandler);
  swiper.value.addEventListener('touchcancel', touchendHandler);
};

//
onMounted(() => {
  swiperSlider.value = new Swiper('.popular_swiper', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-popular-button-next',
      prevEl: '.swiper-popular-button-prev',
    },

    simulateTouch: false,
    allowTouchMove: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1281: {
        slidesPerView: 2,
      },
    },
  });

  // До и После
  beforeAfter();
});

onUnmounted(() => {
  if (swiper.value) {
    // Для ПК
    swiper.value.removeEventListener('mousedown', mousedownHandler);
    swiper.value.removeEventListener('mouseup', mouseupHandler);
    swiper.value.removeEventListener('mouseleave', mouseupHandler);

    // Для мобильного
    swiper.value.removeEventListener('touchstart', touchstartHandler);
    swiper.value.removeEventListener('touchend', touchendHandler);
    swiper.value.removeEventListener('touchcancel', touchendHandler);
  }

  //
  if (swiperSlider.value && swiperSlider.value.destroy) {
    swiperSlider.value.destroy();
  }
});
</script>

<template>
  <div class="popular_bx">
    <div class="popular__title">
      <h2 class="h2_56">Результат работ наших мастеров</h2>

      <!--  -->
      <div class="swiper-btn swiper-popular-button-prev"></div>
      <div class="swiper-btn swiper-popular-button-next"></div>
    </div>

    <!--  -->
    <div class="popular_swiper swiper" ref="swiper">
      <div class="swiper-wrapper sdvig" ref="swiper-wrapper">
        <div v-for="(work, key) in works" :key="key" class="swiper-slide">
          <div class="before_after_bx">
            <div class="before_after__images">
              <div class="before_img">
                <!-- <NuxtImg
                  :src="work.remontDoPosleRepeatIzobrazhenieDo.node?.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  loading="lazy"
                  alt=""
                /> -->
                <img
                  :src="work.remontDoPosleRepeatIzobrazhenieDo.node?.mediaItemUrl"
                  loading="lazy"
                  alt=""
                />

                <span class="before_after__slug">До</span>
              </div>

              <div class="after_img">
                <!-- <NuxtImg
                  :src="work.remontDoPosleRepeatIzobrazheniePosle.node?.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  loading="lazy"
                  alt=""
                /> -->
                <img
                  :src="work.remontDoPosleRepeatIzobrazheniePosle.node?.mediaItemUrl"
                  loading="lazy"
                  alt=""
                />

                <span class="before_after__slug">После</span>
              </div>

              <div class="line_resize"></div>

              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>

            <p class="p_20">{{ work.remontDoPosleRepeatOpisanie }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.popular__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }

  /*  */
  .h2_56 {
    margin-right: 42px;
  }
}

/*  */
.swiper-btn {
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
  }

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
}

.swiper-popular-button-prev {
  rotate: y 180deg;
  margin: 0 42px 0 auto;

  /*  */
  @media (max-width: 576px) {
    margin: 0 14px 0 auto;
  }
}

/*  */
.before_after_bx {
  /*  */
  .p_20 {
    max-width: 609px;
  }
}

.before_after__images {
  position: relative;
  aspect-ratio: 1 / 0.563;
  border-radius: 20px;
  margin-bottom: 32px;
  overflow: hidden;
}

.before_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  /*  */
  img {
    max-width: none;
    height: 100%;
  }
}

/*  */
.after_img img {
  width: 100%;
}

/*  */
.before_after__slug {
  position: absolute;
  top: 42px;
  font-size: 24px;
  background-color: white;
  border-radius: 50px;
  padding: 12px 16px;
  user-select: none;

  /*  */
  @media (max-width: 768px) {
    top: 26px;
  }

  @media (max-width: 576px) {
    top: 12px;
    font-size: 15px;
    padding: 8px 21px;
  }

  /*  */
  .before_img & {
    left: 42px;

    /*  */
    @media (max-width: 768px) {
      left: 26px;
    }

    @media (max-width: 576px) {
      left: 12px;
    }
  }

  /*  */
  .after_img & {
    right: 42px;

    /*  */
    @media (max-width: 768px) {
      right: 26px;
    }

    @media (max-width: 576px) {
      right: 12px;
    }
  }
}

/*  */
.line_resize {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 100%;
  background-color: var(--main--sand);
  cursor: e-resize;
  z-index: 2;

  /*  */
  @media (max-width: 768px) {
    width: 8px;
  }

  /*  */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
    width: 38px;
    height: 46px;
    background-color: white;
    background-image: url(/images/arrow.svg);
    background-repeat: no-repeat;
    background-position: 14px center;
    border-radius: 100px 0 0 100px;
  }

  &::before {
    left: -12px;
  }

  &::after {
    right: -33px;
    transform: rotateY(180deg);
  }

  /*  */
  @media (max-width: 576px) {
    &::before,
    &::after {
      width: 27.5px;
      height: 28px;
      background-size: 9px;
      background-position: 9px center;
    }

    &::before {
      left: -10px;
    }

    &::after {
      right: -24px;
    }
  }
}
</style>
