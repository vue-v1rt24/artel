<script setup lang="ts">
const { topMenu, menu } = useMenus();

//
const emit = defineEmits<{
  eventClick: [];
}>();
</script>

<template>
  <div class="mob_menu">
    <ul>
      <li>
        <NuxtLink to="/catalog/serebro" @click="emit('eventClick')">Каталог</NuxtLink>
      </li>

      <li v-for="m in menu" :key="m.link">
        <NuxtLink :to="m.link" @click="emit('eventClick')">{{ m.title }}</NuxtLink>
      </li>
    </ul>

    <ul>
      <li v-for="t in topMenu" :key="t.link">
        <NuxtLink :to="t.link" @click="emit('eventClick')">{{ t.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.mob_menu {
  max-height: 460px;
  overflow-y: auto;

  opacity: 0;
  translate: 0 30px;
  transition: translate var(--transition-speed), opacity var(--transition-speed);
  transition-delay: var(--transition-speed);

  display: flex;
  column-gap: 300px;
  row-gap: 28px;

  /*  */
  @media (max-width: 1024px) {
    column-gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    row-gap: 20px;
  }
}

.modal_menu.open .mob_menu {
  opacity: 1;
  translate: 0;
}

.mob_menu ul li:not(:last-child) {
  margin-bottom: 28px;

  /*  */
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
}

.mob_menu ul li a {
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: var(--main-green);

  /*  */
  @media (max-width: 576px) {
    font-weight: 200;
    font-size: 18px;
  }
}
</style>
