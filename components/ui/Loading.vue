<script setup lang="ts">
const isLoading = ref(false);

//
const open = () => {
  isLoading.value = true;
};
const close = () => {
  isLoading.value = false;
};

//
defineExpose({
  open,
  close,
});
</script>

<template>
  <div v-if="isLoading" class="loader"></div>
</template>

<style lang="css" scoped>
.loader {
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 3;
}
</style>
