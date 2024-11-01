<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//
defineProps<{
  histories: {
    historyBrandRepeatGod: string;
    historyBrandRepeatOpisanie: string;
  }[];
}>();

//
const history = useTemplateRef('history');
const historyList = useTemplateRef('historyList');

//
onMounted(() => {
  if (!history || !historyList.value) return;

  const w = historyList.value.scrollWidth - window.innerWidth;
});
</script>

<template>
  <div class="history" ref="history">
    <h2 class="h2_56">История бренда</h2>

    <ul class="history__list" ref="historyList">
      <li v-for="history in histories" :key="history.historyBrandRepeatGod" class="history__item">
        <div class="history__year">{{ history.historyBrandRepeatGod }}</div>
        <p class="p_20">{{ history.historyBrandRepeatOpisanie }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.history {
  background-color: var(--green-50);
  background-image: url(/public/images/historyBrand/bg-1920.svg);
  background-repeat: no-repeat;
  background-position: top right;
  padding: 80px 0 120px 0;
  margin: auto;
  overflow: hidden;

  /*  */
  @media (min-width: 1681px) {
    padding-left: 50%;
    margin-left: -803px;
  }
}

/*  */
.history__list {
  display: flex;
  column-gap: 30px;
  margin-top: 60px;
  transition: 0.5s;
}

/*  */
.history__item {
  position: relative;
  width: 513px;
  flex-shrink: 0;
  flex-grow: 1;

  /*  */
  .p_20 {
    max-width: 440px;
  }

  /*  */
  &::before {
    content: '';
    position: absolute;
    top: 32px;
    left: 126px;
    width: calc(100% - 126px);
    height: 1px;
    background-color: var(--gray-text);
  }
}

/*  */
.history__year {
  position: relative;
  width: fit-content;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 42px;
  line-height: 110%;
  color: var(--main--sand);
  background-color: var(--main-green);
  border-radius: 12px;
  padding: 10px 14px;
  margin-bottom: 42px;
}
</style>
