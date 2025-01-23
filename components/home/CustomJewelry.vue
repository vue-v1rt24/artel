<script setup lang="ts">
import { gsap } from 'gsap';

//
defineProps<{
  customJewelry: {
    title: string;
    desc: string;
    image1600: string;
  };
}>();

//
const modal = useTemplateRef('modal');

//
const modalOpen = () => {
  modal.value?.modalOpen();
};

//
onMounted(() => {
  const customJewelryEl = document.querySelector<HTMLDivElement>('.custom_jewelry');

  if (!customJewelryEl) return;

  const customJewelryImgEl = customJewelryEl.querySelector('.custom_jewelry__img');

  customJewelryEl.addEventListener('mousemove', (evt: MouseEvent) => {
    const { offsetX, offsetY } = evt;
    const { clientWidth, clientHeight } = customJewelryEl;

    const xPos = offsetX / clientWidth - 0.5;
    const yPos = offsetY / clientHeight - 0.5;

    gsap.to(customJewelryImgEl, {
      duration: 1.2,
      x: xPos * 30,
      y: yPos * 40,
    });
  });
});
</script>

<template>
  <div class="custom_jewelry">
    <div class="custom_jewelry__left">
      <h2 class="h2_56">{{ customJewelry.title }}</h2>

      <p class="p_20">{{ customJewelry.desc }}</p>
    </div>

    <!--  -->
    <div class="custom_jewelry__right">
      <UiButton
        width="308px"
        title="Узнать подробнее"
        class="special__info_btn"
        @click="modalOpen"
      />

      <div class="custom_jewelry__img">
        <img :src="customJewelry.image1600" loading="lazy" alt="" />
      </div>
    </div>

    <!--  -->
    <Teleport to="body">
      <UiModal id-modal="contact-custom-jewelry" ref="modal">
        <ModalTemplateShell>
          <ModalTemplateFindAvailability
            form-class="custom-jewelry-form"
            title="Ювелирные украшения на заказ"
            subject="Ювелирные украшения на заказ"
          />
        </ModalTemplateShell>
      </UiModal>
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.custom_jewelry {
  height: 418px;
  display: grid;
  grid-template-columns: 687px 1fr;
  overflow: hidden;

  /*  */
  @media (max-width: 1280px) {
    grid-template-columns: 546px 1fr;
  }

  @media (max-width: 1100px) {
    height: auto;
    grid-template-columns: 1fr;
  }
}

/*  */
.h2_56 {
  margin-bottom: 42px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 52px;
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;
  }
}

/*  */
.custom_jewelry__left {
  pointer-events: none;

  /*  */
  @media (max-width: 1100px) {
    margin-bottom: 42px;
  }
}

/*  */
.custom_jewelry__right {
  pointer-events: none;
  display: flex;
  flex-direction: column;
}

.custom_jewelry__right .btn {
  pointer-events: all;
  margin-left: auto;

  /*  */
  @media (max-width: 1280px) {
    transform: translateX(-70px);
  }

  @media (max-width: 1100px) {
    width: 266px;
    height: 76px;
    transform: translateX(0);
    margin-left: 0;
  }

  @media (max-width: 576px) {
    width: 248px;
    height: 65px;
  }
}

.custom_jewelry__img {
  will-change: transform;
  margin: 65px 0 0 70px;

  /*  */
  @media (max-width: 1400px) {
    margin: 110px 0 0 85px;
  }

  @media (max-width: 1280px) {
    max-width: 585px;
    height: 315px;
    aspect-ratio: 1/1;
    margin: 90px 0 0 70px;
  }

  @media (max-width: 1100px) {
    width: 603px;
    max-width: 100%;
    margin: 0px auto 0 auto;
    transform: translateY(72px);
  }

  @media (max-width: 680px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 60%;
    height: 191px;
    transform: translateY(60px);
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 202px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 175px;
    transform: translateY(45px);
  }
}
</style>
