<script setup lang="ts">
import Swiper from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';

//
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//
defineProps<{
  histories: {
    historyBrandRepeatGod: string;
    historyBrandRepeatOpisanie: string;
  }[];
}>();

//
const swiper = ref<Swiper>();

//
const scrollTriggerKillAll = () => {
  if (ScrollTrigger.killAll) {
    ScrollTrigger.killAll();
  }
};

//
onMounted(() => {
  swiper.value = new Swiper('.swiper_history', {
    modules: [FreeMode, Mousewheel],

    //
    slidesPerView: 'auto',
    spaceBetween: '30',
    freeMode: true,
    grabCursor: true,
    mousewheel: {
      enabled: false,
      // sensitivity: 0.1,
    },
    on: {
      reachEnd() {
        document.body.classList.remove('history');
        swiper.value?.mousewheel.disable();
        scrollTriggerKillAll();
      },
    },
  });

  ////////
  if (ScrollTrigger.isTouch !== 1 && !swiper.value.isEnd) {
    ScrollTrigger.create({
      trigger: '.history',
      start: 'top top',
      end: 'top top',
      toggleClass: {
        targets: 'body',
        className: 'history',
      },
      once: true,
      onEnter() {
        swiper.value?.mousewheel.enable();
      },
      markers: true,
    });
  }
});

onUnmounted(() => {
  if (swiper.value && swiper.value.destroy) {
    swiper.value.destroy();
  }

  scrollTriggerKillAll();
});
</script>

<template>
  <div class="history">
    <div class="container">
      <h2 class="h2_56">История бренда</h2>
    </div>

    <!--  -->
    <div class="swiper_history swiper">
      <div class="swiper-wrapper">
        <div v-for="history in histories" :key="history.historyBrandRepeatGod" class="swiper-slide">
          <div class="history__slide">
            <div class="history__year">{{ history.historyBrandRepeatGod }}</div>
            <p class="p_20">{{ history.historyBrandRepeatOpisanie }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.history {
  background-color: var(--green-50);
  background-image: url(/public/images/historyBrand/bg-1920.svg);
  background-repeat: no-repeat;
  background-position: right top;
  padding: 80px 0 120px 0;

  /*  */
  @media (max-width: 1280px) {
    background-size: 79%;
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    background-size: 100%;
    padding: 80px 0;
  }

  @media (max-width: 576px) {
    padding: 52px 0;
  }
}

.swiper_history {
  @media (min-width: 1681px) {
    padding-left: 50%;
    margin-left: -803px;
  }

  @media (max-width: 1680px) {
    padding: 0 40px;
    margin: auto;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
}

/*  */
.h2_56 {
  margin-bottom: 60px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }
}

/*  */
.swiper-slide {
  width: 513px;

  /*  */
  @media (max-width: 1280px) {
    width: 585px;
  }

  @media (max-width: 768px) {
    width: 509px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
}

/*  */
.history__slide {
  overflow: hidden;

  /*  */
  .p_20 {
    max-width: 440px;

    /*  */
    @media (max-width: 1280px) {
      max-width: 100%;
    }
  }
}

/*  */
.history__year {
  position: relative;
  width: fit-content;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 42px;
  line-height: 110%;
  color: var(--main--sand);
  background-color: var(--main-green);
  border-radius: 12px;
  padding: 2px 15px;
  margin-bottom: 42px;

  /*  */
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: calc(100% + 32px);
    width: 100vw;
    height: 1px;
    background-color: var(--gray-text);
  }

  /*  */
  @media (max-width: 768px) {
    font-size: 36px;
    padding: 4px 15px;
    margin-bottom: 28px;

    /*  */
    &::before {
      top: 23px;
    }
  }

  @media (max-width: 576px) {
    font-size: 20px;
    border-radius: 8px;
    margin-bottom: 20px;

    /*  */
    &::before {
      top: 14px;
      left: calc(100% + 18px);
    }
  }
}
</style>
