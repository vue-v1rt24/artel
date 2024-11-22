<script setup lang="ts">
let title = '';

watch(useMessage(), (val) => {
  if (val) {
    title = val;
  }
});
</script>

<template>
  <div :class="['copy_success', { open: useMessage().value }]">{{ title }}</div>
</template>

<style lang="css" scoped>
.copy_success {
  position: fixed;
  bottom: 30px;
  right: -100%;
  z-index: 10;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: #fff;
  background-color: var(--main-green);
  box-shadow: 0 2px 15px 0 rgba(4, 4, 4, 0.3);
  border-radius: 80px;
  padding: 14px 24px;
  transition: right 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /*  */
  @media (max-width: 576px) {
    font-size: 13px;
    padding: 12px 18px;
  }

  /*  */
  &.open {
    right: 10px;
  }
}
</style>
