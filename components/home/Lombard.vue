<script setup lang="ts">
defineProps<{
  lombard: {
    title: string;
    desc: string;
    image: string;
    modal: string;
  };
}>();

//
const modal = useTemplateRef('modal');
</script>

<template>
  <div class="lombard_bx">
    <div class="container">
      <div class="lombard">
        <div class="lombard__left">
          <h2 class="h2_56">{{ lombard.title }}</h2>
          <p class="p_20" v-html="lombard.desc"></p>

          <UiButton
            v-if="lombard?.modal"
            width="494px"
            title="Условия приема ювелирных изделий"
            bg="white"
            text-color="var(--main-green)"
            @btn-click="modal?.modalOpen"
          />
        </div>

        <div class="lombard__right">
          <NuxtImg
            :src="lombard.image"
            format="avif, webp"
            densities="x1"
            loading="lazy"
            class="lombard__right_img"
            alt=""
          />

          <NuxtImg
            src="/images/home/lombard-decor.png"
            format="avif, webp"
            densities="x1"
            loading="lazy"
            class="lombard__right_decor"
            alt=""
          />
        </div>
      </div>
    </div>

    <Teleport v-if="lombard?.modal" to="body">
      <UiModal id-modal="lombard" ref="modal">
        <ModalTemplateShell width="888px">
          <ModalTemplateLombard :data="lombard.modal" />
        </ModalTemplateShell>
      </UiModal>
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.lombard_bx {
  background-color: var(--green-50);
  background-image: url(/images/home/lombard-bg-decor.svg);
  background-repeat: no-repeat;
  background-position: left bottom;
  padding: 120px 0;

  /*  */
  @media (max-width: 1280px) {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    background-position-x: right;
    background-size: 140%;
    padding: 80px 0;
  }

  @media (max-width: 576px) {
    padding: 52px 0;
  }
}

.lombard {
  display: flex;
  justify-content: space-between;
  column-gap: 55px;

  /*  */
  @media (max-width: 1200px) {
    flex-direction: column;
    row-gap: 52px;
  }

  @media (max-width: 576px) {
    row-gap: 42px;
  }
}

/*  */
.lombard__left {
  max-width: 641px;

  /*  */
  @media (max-width: 1280px) {
    max-width: 551px;
  }
}

.h2_56 {
  @media (max-width: 768px) {
    max-width: 460px;
  }

  @media (max-width: 480px) {
    max-width: 265px;
  }
}

.p_20 {
  max-width: 596px;
  margin: 60px 0 40px 0;

  /*  */
  @media (max-width: 1280px) {
    max-width: 505px;
    margin: 52px 0 44px 0;
  }

  @media (max-width: 576px) {
    margin: 22px 0 32px 0;
  }
}

.lombard__left .btn {
  width: 456px;

  /*  */
  @media (max-width: 576px) {
    width: 100%;
    padding: 0 30px;
  }

  @media (max-width: 375px) {
    height: auto;
    padding: 20px 35px;
  }
}

/*  */
.lombard__right {
  position: relative;
}

.lombard__right_img {
  border-radius: 20px;
}

.lombard__right_decor {
  position: absolute;
  top: 32px;
  left: 32px;

  /*  */
  @media (max-width: 1280px) {
    top: auto;
    left: 0;
    bottom: 0px;
  }

  @media (max-width: 1200px) {
    top: 26px;
    left: 26px;
    bottom: auto;
  }

  @media (max-width: 576px) {
    top: 18px;
    left: 18px;
    height: 42px;
  }
}
</style>
