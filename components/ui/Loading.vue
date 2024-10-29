<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
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
