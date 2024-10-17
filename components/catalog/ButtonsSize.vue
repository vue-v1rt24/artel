<script setup lang="ts">
import { EnumViewCard } from '~/types/pages/catalog.types';

//
const viewport = useViewport();

const btnVal = { little: EnumViewCard.LITTLE, big: EnumViewCard.BIG };
const btnActive = ref(EnumViewCard.LITTLE);

//
const emit = defineEmits<{
  sizeCards: [size: EnumViewCard];
}>();

//
const changeBtnVal = (val: EnumViewCard) => {
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
      <div v-if="viewport.isGreaterOrEquals('screen768')">
        <ImagesSortButtonBig />
        <span>Больше</span>
      </div>

      <ImagesSortButtonBigMob v-else />
    </button>

    <button
      type="button"
      :class="{ active: btnActive === btnVal.little }"
      @click="changeBtnVal(btnVal.little)"
    >
      <div v-if="viewport.isGreaterOrEquals('screen768')">
        <ImagesSortButtonLittle />
        <span>Меньше</span>
      </div>

      <ImagesSortButtonLittleMob v-else />
    </button>
  </div>
</template>

<style lang="css" scoped>
.sort_buttons {
  display: flex;
  column-gap: 32px;

  /*  */
  @media (max-width: 576px) {
    column-gap: 24px;
  }

  /*  */
  button {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 90%;
    color: var(--main-green);
    background-color: white;
    border: 2px solid var(--low-green);
    border-radius: 12px;
    user-select: none;
    padding: 14px 18px;

    /*  */
    &.active {
      background-color: var(--green-50);
      border-color: var(--green-50);
      pointer-events: none;
    }

    /*  */
    @media (max-width: 767px) {
      padding: 0;
    }

    /*  */
    div {
      display: flex;
      align-items: center;
      column-gap: 14px;
    }
  }
}
</style>
