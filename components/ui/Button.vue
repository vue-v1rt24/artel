<script setup lang="ts">
const {
  height = '91px',
  fontSize = '22px',
  textColor = 'white',
  textColorHover = 'white',
  textColorActive = 'white',
  bg = '#172d2d',
  bgHover = 'var(--medium-green)',
  bgActive = 'var(--green-dark)',
  borderRadius = '20px',
} = defineProps<{
  width: string;
  height?: string;
  title: string;
  fontSize?: string;
  textColor?: string;
  textColorHover?: string;
  textColorActive?: string;
  bg?: string;
  bgHover?: string;
  bgActive?: string;
  borderRadius?: string;
}>();
</script>

<template>
  <button class="btn" type="button">{{ title }}</button>
</template>

<style lang="css" scoped>
.btn {
  width: v-bind(width);
  height: v-bind(height);
  font-family: var(--font-family);
  font-size: v-bind(fontSize);
  color: v-bind(textColor);
  background-color: v-bind(bg);
  border: none;
  border-radius: v-bind(borderRadius);
  scale: 1;
  transition: color var(--transition-speed), background-color var(--transition-speed),
    scale var(--transition-speed);

  /*  */
  @media (max-width: 768px) {
    height: 76px;
    font-size: 20px;
  }

  @media (max-width: 576px) {
    height: 65px;
    font-size: 18px;
    border-radius: 16px;
  }
}

@media (hover: hover) {
  .btn:hover {
    color: v-bind(textColorHover);
    background-color: v-bind(bgHover);
  }
}

.btn:active {
  color: v-bind(textColorActive);
  background-color: v-bind(bgActive);
  scale: 0.95;
}
</style>
