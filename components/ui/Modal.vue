<script setup lang="ts">
import * as FancyboxAll from '@fancyapps/ui';

//
const { idModal } = defineProps<{
  idModal: string;
}>();

//
const { Fancybox } = FancyboxAll;

//
const modalOpen = () => {
  Fancybox.show([{ src: idModal, type: 'inline' }], {
    closeButton: false,
    autoFocus: false,
    // dragToClose: false,
    on: {
      close() {
        useIsCloseModal().value = true;
        setTimeout(() => (useIsCloseModal().value = false), 300);
      },
    },
  });
};

//
onUnmounted(() => {
  if (Fancybox.destroy) {
    Fancybox.destroy();
  }
});

//
defineExpose({
  modalOpen,
});
</script>

<template>
  <div :id="idModal" class="modal">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.modal {
  display: none;
  background-color: transparent;
  padding: 0;
}
</style>
