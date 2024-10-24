<script setup lang="ts">
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
const slides = useTemplateRef('slides');
const isActive = ref(false);

const bfImageBx = ref<Ref<HTMLElement> | null>(null);
const resizeBx = ref<Ref<HTMLElement> | null>(null);

const changeIsActive = (evt: MouseEvent) => {
  console.dir();

  switch (evt.type) {
    case 'mousedown':
      bfImageBx.value = evt.currentTarget.firstChild.firstChild.firstChild;
      resizeBx.value = evt.currentTarget.firstChild.firstChild.lastChild;
      isActive.value = true;
      break;
    case 'mouseup':
    case 'mouseleave':
      isActive.value = false;
      resizeBx.value = null;
      break;
  }
};

const beforeAfterSlider = (evt: MouseEvent) => {
  if (!slides.value || !isActive.value) return;

  console.log(evt.clientX);

  // console.log(evt.layerX + 1);
  // console.dir(evt.currentTarget.firstChild.firstChild.lastChild);

  // console.log((bfImageBx.value.style.width = '10px'));
  // console.log(resizeBx.value);

  //@ts-ignore
  // bfImageBx.value?.style.width = evt.layerX + 1 + 'px';
  //@ts-ignore
  // resizeBx.value?.style.left = evt.layerX + 1 + 'px';

  //@ts-ignore
  // evt.currentTarget.firstChild.firstChild.firstChild.style.width = evt.layerX + 1 + 'px';
  //@ts-ignore
  // evt.currentTarget.firstChild.firstChild.lastChild.style.left = evt.layerX + 1 + 'px';
  //@ts-ignore
  // evt.currentTarget.firstChild.firstChild.lastChild.style.pointerEvents = 'none';

  //

  // let shift = Math.max(0, Math.min(x, slider.value.offsetWidth));

  // before.value.style.width = shift + 'px';
  // resize.value.style.left = shift + 'px';
};

const beforeAfter = () => {
  if (!slides.value) return;

  for (const slide of slides.value as HTMLDivElement[]) {
    slide.addEventListener('mousedown', changeIsActive);
    slide.addEventListener('mouseup', changeIsActive);
    slide.addEventListener('mouseleave', changeIsActive);

    slide.addEventListener('mousemove', beforeAfterSlider);
  }
};

//
onMounted(() => {
  const swiper = new Swiper('.popular_swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: '30',
    loop: true,
    navigation: {
      nextEl: '.swiper-popular-button-next',
      prevEl: '.swiper-popular-button-prev',
    },

    simulateTouch: false,
    allowTouchMove: false,
    nested: true,
    // touchEventsTarget: 'container',
    // touchMoveStopPropagation: true,
    // touchReleaseOnEdges: true,
    watchOverflow: false,

    breakpoints: {
      360: {
        spaceBetween: 20,
      },
      577: {
        spaceBetween: 30,
      },
    },
  });

  //
  beforeAfter();
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
    <div class="popular_swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(work, key) in works" :key="key" class="swiper-slide" ref="slides">
          <div class="before_after_bx">
            <div class="before_after__images">
              <div class="before_img">
                <NuxtImg
                  :src="work.remontDoPosleRepeatIzobrazhenieDo.node.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  loading="lazy"
                />
              </div>

              <div class="after_img">
                <NuxtImg
                  :src="work.remontDoPosleRepeatIzobrazheniePosle.node.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  loading="lazy"
                />
              </div>

              <div class="line_resize" data-type="resize"></div>

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
    display: none;
  }
}

/*  */
.swiper-slide {
  width: 785px;

  /*  */
  @media (max-width: 1280px) {
    /* width: 328px; */
  }

  @media (max-width: 768px) {
    /* width: 328px; */
  }

  @media (max-width: 576px) {
    /* width: 150px; */
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
  width: 785px;
  height: 442px;
  border-radius: 20px;
  margin-bottom: 32px;
  overflow: hidden;
}

.before_img,
.after_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /*  */
  img {
    max-width: none;
  }
}

.before_img {
  width: 50%;
  overflow: hidden;
  z-index: 2;
}

.line_resize {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 100%;
  background-color: var(--main--sand);
  cursor: e-resize;
  z-index: 3;
}

/*  */
.swiper-popular-button-prev {
  rotate: y 180deg;
  margin: 0 42px 0 auto;
}
</style>
