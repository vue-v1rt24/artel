<script setup lang="ts">
const btnVal = { little: 'little', big: 'big' };
const btnActive = ref('little');

//
const emit = defineEmits<{
  sizeCards: [size: string];
}>();

//
const changeBtnVal = (val: string) => {
  btnActive.value = val;
  emit('sizeCards', val);
};
</script>

<template>
  <div class="sort_buttons">
    <button
      type="button"
      :class="{ active: btnActive === btnVal.big }"
      @click="changeBtnVal(btnVal.big)"
    >
      <ImagesSortButtonBig />
      <span>Больше</span>
    </button>

    <button
      type="button"
      :class="{ active: btnActive === btnVal.little }"
      @click="changeBtnVal(btnVal.little)"
    >
      <ImagesSortButtonLittle />
      <span>Меньше</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.sort_buttons {
  display: flex;
  column-gap: 32px;

  /*  */
  button {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 90%;
    color: var(--main-green);
    background-color: white;
    display: flex;
    align-items: center;
    column-gap: 14px;
    border: 2px solid var(--low-green);
    border-radius: 12px;
    user-select: none;
    padding: 16px 20px;

    /*  */
    &.active {
      background-color: var(--green-50);
      border-color: var(--green-50);
      pointer-events: none;
    }
  }
}
</style>
