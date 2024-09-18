<script setup lang="ts">
const isOpenMenu = useIsOpenMenu();

const { cats, stock } = defineProps<{
  cats: {
    databaseId: number;
    name: string;
    slug: string;
    image: {
      mediaItemUrl: string;
    };
  }[];
  stock?: {
    image: string;
    slug: string;
  };
}>();
</script>

<template>
  <div v-show="isOpenMenu" class="back_fon"></div>

  <div :class="['modal_menu', { open: isOpenMenu }]">
    <div class="container">
      <ul class="modal_menu__list">
        <li v-for="cat in cats" :key="cat.databaseId" class="modal_menu__item">
          <NuxtLink
            :to="{ path: '/categories', query: { cat: cat.slug } }"
            class="modal_menu__item_link"
          >
            <span class="cat__title">{{ cat.name }}</span>

            <NuxtImg
              :src="cat.image.mediaItemUrl"
              format="avif, webp"
              densities="x1"
              class="modal_menu__item_img"
            />
          </NuxtLink>
        </li>

        <li v-if="stock?.image" class="modal_menu__stock">
          <NuxtLink :to="`/stocks/${stock.slug}`">
            <NuxtImg :src="stock.image" format="avif, webp" densities="x1" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.modal_menu {
  position: absolute;
  top: 68px;
  left: 0;
  width: 100%;
  height: 565px;
  background-color: white;
  padding-top: 190px;
  translate: 0 -100%;
  opacity: 0;
  transition: translate var(--transition-speed), opacity var(--transition-speed);
  overflow: hidden;
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
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-color: aqua;
}

/*  */
.modal_menu__list {
  opacity: 0;
  translate: 0 30px;
  transition: translate var(--transition-speed), opacity var(--transition-speed);
  transition-delay: var(--transition-speed);

  display: flex;
  align-items: center;
  column-gap: 30px;
}

.modal_menu.open .modal_menu__list {
  opacity: 1;
  translate: 0;
}

/*  */
.modal_menu__item {
  position: relative;
  width: 377px;
  height: 315px;
  background-color: var(--green-50);
  border-radius: 20px;
}

.modal_menu__item_link {
  position: absolute;
  inset: 0;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--main-green);
  padding: 42px;
}

/*  */
.modal_menu__item_img {
  position: absolute;
  bottom: 20px;
  right: 20px;
  mix-blend-mode: darken;
}

/*  */
.modal_menu__stock {
  border-radius: 10px;
  overflow: hidden;
}

.modal_menu__stock img {
  max-width: none;
}
</style>
