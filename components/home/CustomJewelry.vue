<script setup lang="ts">
import { gsap } from 'gsap';

defineProps<{
  customJewelry: {
    title: string;
    desc: string;
    image1600: string;
  };
}>();

const modal = useTemplateRef('modal');

//
const modalOpen = () => {
  modal.value?.modalOpen();
};
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
        width="278px"
        title="Узнать подробнее"
        class="special__info_btn"
        @click="modalOpen"
      />

      <div class="custom_jewelry__img">
        <NuxtImg :src="customJewelry.image1600" densities="x1" />
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
}

/*  */
.h2_56 {
  margin-bottom: 42px;
}

/*  */
.custom_jewelry__right {
  display: flex;
  flex-direction: column;
}

.custom_jewelry__right .btn {
  margin-left: auto;
}

.custom_jewelry__img {
  margin: 65px 0 0 85px;
}
</style>
