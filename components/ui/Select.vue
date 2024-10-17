<script setup lang="ts">
const { options, select = 0 } = defineProps<{
  options: string[];
  select?: number;
}>();

//
const emit = defineEmits<{
  selectOptionVal: [val: string];
}>();

//
const titleSelect = ref(options[select]);
const isOpen = ref(false);

// Получение значения селекта
const changeOption = (option: string) => {
  titleSelect.value = option;
  emit('selectOptionVal', option);
};
</script>

<template>
  <div :class="['select', { active: isOpen }]" @click="isOpen = !isOpen">
    <div class="select__title">
      <span>{{ titleSelect }}</span>
      <ImagesArrowBgWhite />
    </div>

    <div class="select__options">
      <span
        v-for="option in options"
        :key="option"
        :class="['select__option', { active: titleSelect === option }]"
        @click="changeOption(option)"
      >
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
  z-index: 1;

  /*  */
  @media (max-width: 576px) {
    font-size: 12px;
  }
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

  /*  */
  @media (hover: hover) {
    &:hover {
      background-color: var(--green-50);
      border-color: transparent;
    }
  }

  /*  */
  @media (max-width: 576px) {
    height: 39px;
  }

  /*  */
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

    /*  */
    @media (max-width: 576px) {
      top: -12px;
      width: 26px;
    }

    /*  */
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
  transition: top var(--transition-speed), opacity var(--transition-speed),
    visibility var(--transition-speed);
  cursor: pointer;

  /*  */
  @media (max-width: 576px) {
    top: 20px;
  }

  /*  */
  .active & {
    top: 64px;
    opacity: 1;
    visibility: visible;

    /*  */
    @media (max-width: 576px) {
      top: 50px;
    }
  }
}

.select__option {
  display: block;

  /*  */
  &.active {
    pointer-events: none;
  }
}
</style>
