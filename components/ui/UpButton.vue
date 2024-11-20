<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//
gsap.registerPlugin(ScrollTrigger);

//
const up = useTemplateRef('up');

//
onMounted(() => {
  ScrollTrigger.create({
    start: 500,
    end: 'bottom 100',
    toggleClass: {
      targets: '.up_button',
      className: 'active',
    },
  });

  //
  up.value?.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
});
</script>

<template>
  <div class="up_button" ref="up">
    <img src="/images/up.svg" alt="" />
  </div>
</template>

<style lang="css" scoped>
.up_button {
  position: fixed;
  top: 20px;
  right: -100%;
  z-index: 11;
  cursor: pointer;
  transition: right 1s cubic-bezier(0.175, 0.885, 0.32, 1.03);

  /*  */
  &.active {
    right: 20px;
  }
}
</style>
