<script setup lang="ts">
const {
  fontSize = '22px',
  textColor = 'white',
  bg = '#172d2d',
  borderRadius = '20px',
} = defineProps<{
  title: string;
  fontSize?: string;
  textColor?: string;
  bg?: string;
  borderRadius?: string;
}>();
</script>

<template>
  <button class="btn" type="button">{{ title }}</button>
</template>

<style lang="css" scoped>
.btn {
  font-family: var(--font-family);
  font-size: v-bind(fontSize);
  color: v-bind(textColor);
  background-color: v-bind(bg);
  border-radius: v-bind(borderRadius);
}
</style>
