<script setup lang="ts"></script>

<template>
  <div class="container">
    <button type="button" class="back" @click="$router.back">
      <ImagesArrowBgWhite />
      <span>Вернуться назад</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
.back {
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 15px;
  line-height: 90%;
  color: var(--gray-text);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin: 24px 0 32px 0;

  /*  */
  .arrow_stock {
    width: 34px;
    margin-left: -17px;
  }
}
</style>
