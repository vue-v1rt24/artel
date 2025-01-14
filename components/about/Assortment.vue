<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//
defineProps<{
  assortment: {
    assortmentIzobrazhenie1: {
      node: {
        mediaItemUrl: string;
      };
    };
    assortmentIzobrazhenie2: {
      node: {
        mediaItemUrl: string;
      };
    };
    assortmentZagolovok: string;
    assortmentTekst: string;
  }[];
}>();

// Для установки высоты элементам с классом "assortment__item"
const setHeight = ref('auto');

//
onMounted(() => {
  if (ScrollTrigger.isTouch !== 1) {
    setHeight.value = '100vh';

    //
    const pinnedLi = gsap.utils.toArray<HTMLDivElement>('.pinned');
    const lastItem = document.querySelector<HTMLDivElement>('.assortment__item.scroll')!;

    pinnedLi.forEach((section, index, sections) => {
      const nextSection = sections[index + 1] || lastItem;
      const endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

      gsap.fromTo(
        section,
        { scale: 1 },
        {
          scale: 0.5,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 50px',
            end: endScalePoint,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            onEnter(self) {
              self.refresh();
            },
          },
        },
      );
    });
  }
});

onUnmounted(() => {
  gsap.killTweensOf('.pinned');
  ScrollTrigger.killAll();
});
</script>

<template>
  <div class="container">
    <div class="assortment">
      <h2 class="h2_56">Наш ассортимент включает:</h2>

      <div class="assortment__right">
        <ul class="assortment__list">
          <li
            v-for="(assort, idx) in assortment"
            :key="assort.assortmentZagolovok"
            :class="[
              'assortment__item',
              { pinned: idx !== assortment.length - 1, scroll: idx === assortment.length - 1 },
            ]"
          >
            <div class="assortment__images">
              <div class="assortment__images_bx">
                <NuxtImg
                  :src="assort.assortmentIzobrazhenie1.node?.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  alt=""
                />
              </div>

              <div class="assortment__images_bx">
                <NuxtImg
                  :src="assort.assortmentIzobrazhenie2.node?.mediaItemUrl"
                  format="avif, webp"
                  densities="x1"
                  alt=""
                />
              </div>
            </div>

            <h3 class="h3_32">{{ assort.assortmentZagolovok }}</h3>
            <p class="p_20">{{ assort.assortmentTekst }}</p>

            <UiButton
              v-if="idx === assortment.length - 1"
              width="100%"
              title="Перейти в каталог"
              bg="var(--green-50)"
              text-color="var(--main-green)"
              @btn-click="$router.push('/catalog')"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.assortment {
  display: flex;
  justify-content: space-between;

  /*  */
  @media (max-width: 1160px) {
    flex-direction: column;
  }
}

/*  */
.h2_56 {
  position: sticky;
  top: 50px;
  max-width: 493px;
  height: 100%;

  /*  */
  @media (max-width: 1160px) {
    position: static;
    max-width: 100%;
    height: auto;
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }
}

/*  */
.assortment__item {
  height: v-bind(setHeight);
  background-color: white;
  margin-bottom: 80px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 60px;
  }

  @media (max-width: 576px) {
    margin-bottom: 42px;
  }

  /*  */
  &:last-child {
    position: relative;
    z-index: 1;
    height: auto;
    margin-bottom: 0;

    /*  */
    .btn {
      margin-top: 60px;

      /*  */
      @media (max-width: 1280px) {
        margin-top: 52px;
      }

      @media (max-width: 768px) {
        margin-top: 42px;
      }

      @media (max-width: 576px) {
        margin-top: 26px;
      }
    }
  }
}

/*  */
.assortment__images {
  display: flex;
  column-gap: 30px;

  /*  */
  @media (max-width: 1280px) {
    column-gap: 25px;
  }

  @media (max-width: 576px) {
    column-gap: 20px;
  }

  /*  */
  .assortment__images_bx {
    @media (max-width: 1160px) {
      width: 100%;
    }
  }

  /*  */
  img {
    border-radius: 20px;

    /*  */
    @media (max-width: 1160px) {
      width: 100%;
    }
  }
}

/*  */
.h3_32 {
  max-width: 420px;
  margin: 42px 0 24px 0;

  /*  */
  @media (max-width: 1360px) {
    margin: 32px 0 24px 0;
  }

  @media (max-width: 1160px) {
    max-width: 100%;
  }

  @media (max-width: 576px) {
    margin: 24px 0 16px 0;
  }
}

.p_20 {
  max-width: 504px;

  /*  */
  @media (max-width: 1160px) {
    max-width: 100%;
  }
}
</style>
