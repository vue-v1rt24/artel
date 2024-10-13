<script setup lang="ts">
const { data: catsStock, error } = await useFetch('/api/getCats');

if (error.value) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Категории не найдены',
  });
}

const viewport = useViewport();
const isOpenMenu = useIsOpenMenu();

// Закрытие меню
const closeModalMenu = () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  }
};
</script>

<template>
  <div :class="['back_fon', isOpenMenu && 'active']" @click="isOpenMenu = false"></div>

  <div :class="['modal_menu', { open: isOpenMenu }]">
    <div class="container">
      <HeaderModalMenuPC
        v-if="viewport.isGreaterOrEquals('screen768') && catsStock?.cats.length"
        :cats="catsStock?.cats"
        :stock="catsStock?.stock"
        @event-click="isOpenMenu = false"
      />

      <HeaderModalMenuMob
        v-if="viewport.isLessThan('screen768')"
        @event-click="isOpenMenu = false"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal_menu {
  position: absolute;
  top: 68px;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  padding: 190px 0 60px 0;
  translate: 0 -100%;
  opacity: 0;
  transition: translate var(--transition-speed), opacity var(--transition-speed);
  overflow: hidden;

  /*  */
  @media (max-width: 1366px) {
    top: 50px;
  }

  @media (max-width: 1200px) {
    top: 30px;
  }

  @media (max-width: 768px) {
    padding: 175px 0 40px 0;
  }

  @media (max-width: 576px) {
    padding: 110px 0 40px 0;
  }
}

.modal_menu.open {
  translate: 0;
  opacity: 1;
}

/*  */
.back_fon {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(24.5px);
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: opacity var(--transition-speed), opacity var(--transition-speed);
}

.back_fon.active {
  opacity: 1;
  visibility: visible;
}
</style>
