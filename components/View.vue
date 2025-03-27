<script setup lang="ts">
import { localStorageUtil } from '~/utils/localStorage.utils';

//
const { id, nameField, keyStorage } = defineProps<{
  id: number;
  count: number;
  nameField: string;
  keyStorage: string;
}>();

const changeCount = async () => {
  await $fetch('/api/changeCountView', {
    method: 'POST',
    body: {
      id,
      nameField,
    },
  });
};

const setLocalStorage = async () => {
  const loc = (localStorageUtil.getStorage(keyStorage) as number[]) || [];

  if (!loc.includes(id)) {
    try {
      await changeCount();
      loc.push(id);
      localStorageUtil.setStorage(keyStorage, loc);
    } catch (error) {
      console.error(error);
    }
  }
};

//
onMounted(() => {
  setLocalStorage();
});
</script>

<template>
  <div class="view">
    <img src="/images/view.svg" alt="" />
    <span>{{ count }}</span>
  </div>
</template>

<style lang="css" scoped>
.view {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--gray-text);
  display: flex;
  align-items: center;
  column-gap: 10px;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
    column-gap: 8px;
  }

  /*  */
  img {
    @media (max-width: 576px) {
      width: 14px;
    }
  }
}
</style>
