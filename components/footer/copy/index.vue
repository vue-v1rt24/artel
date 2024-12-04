<script setup lang="ts">
import { gsap } from 'gsap';

//
defineProps<{
  vk: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
}>();

//
const route = useRoute();

//
let mm = gsap.matchMedia();
const copyText = useTemplateRef('copyText');
const social = useTemplateRef('social');
const copyLogo = useTemplateRef('copyLogo');

//
onMounted(() => {
  mm.add('(max-width: 1500px)', () => {
    social.value?.append(copyText.value!);

    return () => {
      copyLogo.value?.after(copyText.value!);
    };
  });

  mm.add('(max-width: 1100px)', () => {
    copyLogo.value?.after(copyText.value!);

    return () => {
      social.value?.append(copyText.value!);
    };
  });
});
</script>

<template>
  <div class="copy">
    <div class="copy__logo" ref="copyLogo">
      <NuxtLink v-if="route.path !== '/'" to="/">
        <ImagesLogoFooter />
      </NuxtLink>

      <ImagesLogoFooter v-else />
    </div>

    <!--  -->
    <div class="copy__text" ref="copyText">
      <div class="copy__text_1">© Золотая Артель, 2024</div>
      <NuxtLink class="copy__policy" to="/privacy-policy">Политика конфиденциальности</NuxtLink>
      <!-- <NuxtLink class="copy__oferta" to="/oferta">Не является публичной офертой</NuxtLink> -->
      <div class="copy__oferta">Не является публичной офертой</div>
    </div>

    <!--  -->
    <div class="social" ref="social">
      <div class="social__list">
        <a class="social__link" :href="vk" target="_blank">
          <ImagesSocialVK />
        </a>

        <a class="social__link" :href="telegram" target="_blank">
          <ImagesSocialTelegram />
        </a>

        <a class="social__link" :href="whatsapp" target="_blank">
          <ImagesSocialWhatsapp />
        </a>

        <a class="social__link" :href="instagram" target="_blank">
          <ImagesSocialInstagram />
        </a>
      </div>

      <div class="social__text">
        Социальная сеть Instagram запрещены в РФ. Компания Meta признана экстремистской организацией
        на территории Российской Федерации.
      </div>
    </div>

    <!--  -->
    <div class="copy__created">
      <a href="https://pranait.ru" target="_blank">
        <img src="/public/images/created.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.copy {
  position: relative;
  display: flex;
  margin-top: 80px;

  /*  */
  @media (max-width: 1600px) {
    justify-content: space-between;
  }

  @media (max-width: 1500px) {
    margin-top: 60px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin-top: 52px;
  }

  @media (max-width: 700px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
  }
}

/*  */
.copy__logo {
  flex-shrink: 0;
}

.copy__logo svg {
  width: 314px;

  /*  */
  @media (max-width: 1280px) {
    width: 255px;
  }

  @media (max-width: 576px) {
    width: 150px;
    height: 66px;
  }
}

/*  */
.copy__text,
.social,
.copy__created {
  padding-top: 25px;

  /*  */
  @media (max-width: 1280px) {
    padding-top: 8px;
  }

  @media (max-width: 1100px) {
    padding-top: 12px;
  }
}

/*  */
.copy__text {
  flex-shrink: 0;
  font-weight: 200;
  font-size: 16px;
  line-height: 100%;
  margin: 0 160px 0 93px;

  /*  */
  @media (max-width: 1600px) {
    margin: 0;
  }

  @media (max-width: 1500px) {
    display: flex;
    column-gap: 62px;
    padding-top: 42px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    row-gap: 14px;
    padding-top: 32px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
    padding-top: 26px;
  }

  /*  */
  a {
    color: var(--gray-text);
    display: block;
    margin-bottom: 14px;

    /*  */
    @media (max-width: 1500px) {
      margin-bottom: 0;
    }
  }
}

.copy__text_1 {
  margin-bottom: 18px;

  /*  */
  @media (max-width: 1500px) {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    position: static;
  }
}

/*  */
.copy__oferta {
  color: var(--gray-text);
}

/*  */
.social {
  flex-shrink: 0;

  /*  */
  @media (max-width: 700px) {
    margin-top: 14px;
  }
}

/*  */
.copy__created {
  flex-shrink: 0;
}

/*  */
.social__list {
  display: flex;
  column-gap: 24px;

  /*  */
  @media (max-width: 1100px) {
    position: absolute;
    top: 20px;
    right: 0;
  }

  @media (max-width: 700px) {
    position: static;
    justify-content: center;
    margin-bottom: 26px;
  }
}

.social__link {
  width: 52px;
  height: 52px;
  background-color: var(--green-50);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color var(--transition-speed);

  /*  */
  svg {
    color: var(--main-green);
    transition: color var(--transition-speed);
  }

  /*  */
  @media (hover: hover) {
    &:hover {
      background-color: var(--main-green);

      svg {
        color: white;
      }
    }
  }

  /*  */
  @media (max-width: 576px) {
    width: 42px;
    height: 42px;

    /*  */
    svg {
      width: 20px;
      height: 20px;
    }
  }
}

/*  */
.social__text {
  max-width: 475px;
  font-weight: 200;
  font-size: 13px;
  line-height: 140%;
  color: var(--gray-text);
  margin-top: 16px;

  /*  */
  @media (max-width: 700px) {
    margin: 0 auto;
  }
}

/*  */
.copy__created {
  margin-left: auto;

  /*  */
  @media (max-width: 1600px) {
    margin-left: 0;
  }

  @media (max-width: 1100px) {
    position: absolute;
    top: 95px;
    right: 0;
  }

  @media (max-width: 768px) {
    top: 125px;
    width: 111px;
  }

  @media (max-width: 700px) {
    position: static;
    margin: 14px auto 0 auto;
  }
}
</style>
