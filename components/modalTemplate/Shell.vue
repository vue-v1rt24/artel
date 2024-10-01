<script setup lang="ts">
const { width = '624px' } = defineProps<{
  width?: string;
}>();
</script>

<template>
  <div class="shell_bx">
    <img class="shell__close" data-fancybox-close src="/images/close.svg" alt="" />
    <slot />
  </div>
</template>

<style lang="css" scoped>
.shell_bx {
  position: relative;
  width: v-bind(width);
  max-width: 100%;
  background-color: white;
  border-radius: 32px;
  padding: 82px;

  /*  */
  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 42px;
  }

  @media (max-width: 576px) {
    padding: 38px 24px 24px 24px;
  }
}

/*  */
.shell__close {
  position: absolute;
  top: 28px;
  right: 28px;
  opacity: 0.3;
  cursor: pointer;
  transition: opacity var(--transition-speed);

  /*  */
  @media (max-width: 576px) {
    width: 15px;
  }
}

@media (hover: hover) {
  .shell__close:hover {
    opacity: 1;
  }
}

@media (hover: none) {
  .shell__close:active {
    opacity: 1;
  }
}
</style>
