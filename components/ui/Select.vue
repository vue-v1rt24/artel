<script setup lang="ts">
const { select = 0 } = defineProps<{
  options: string[];
  select?: number;
}>();

//
const selectEl = useTemplateRef('select');
const isOpen = ref(false);

//
const openSelect = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    selectEl.value?.classList.add('active');
  }

  if (!isOpen.value) {
    selectEl.value?.classList.remove('active');
    selectEl.value?.classList.add('not_active');

    setTimeout(() => selectEl.value?.classList.remove('not_active'), 300);
  }
};
</script>

<template>
  <div :class="['select']" @click="openSelect" ref="select">
    <div class="select__title">
      <span>{{ options[select] }}</span>
      <ImagesArrowBgWhite />
    </div>

    <div class="select__options">
      <span v-for="option in options" :key="option" class="select__option">
        {{ option }}
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.select {
  position: relative;
  width: fit-content;
  font-weight: 300;
  font-size: 16px;
  line-height: 90%;
  color: var(--main-green);
}

/*  */
.select__title {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 51px;
  background-color: white;
  display: flex;
  align-items: center;
  border: 2px solid var(--low-green);
  border-radius: 12px;
  padding: 0 40px 0 20px;
  cursor: pointer;
  transition: background-color var(--transition-speed), border-color var(--transition-speed);
  user-select: none;

  &:hover {
    background-color: var(--green-50);
    border-color: transparent;
  }

  .active & {
    color: white;
    background-color: var(--main-green);
    border-color: transparent;
  }

  /* Стрелка */
  .arrow_stock {
    position: absolute;
    top: -4px;
    right: 6px;
    width: 30px;
    rotate: 270deg;
    color: var(--gray-text);

    .active & {
      rotate: 90deg;
      color: white;
    }
  }
}

/*  */
.select__options {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: top var(--transition-speed), visibility var(--transition-speed);
  cursor: pointer;

  .active & {
    top: 64px;
    opacity: 1;
    visibility: visible;
    transition: top var(--transition-speed), visibility var(--transition-speed);
  }

  .not_active & {
    top: 50px;
    opacity: 0;
    visibility: hidden;
    transition: top var(--transition-speed), visibility var(--transition-speed);
  }
}

.select__option {
  display: block;
}
</style>
