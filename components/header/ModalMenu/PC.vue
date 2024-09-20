<script setup lang="ts">
const viewport = useViewport();

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
  <ul class="modal_menu__list">
    <li v-for="cat in cats" :key="cat.databaseId" class="modal_menu__item">
      <NuxtLink :to="`/catalog/${cat.slug}`" class="modal_menu__item_link">
        <span class="cat__title">{{ cat.name }}</span>

        <NuxtImg
          :src="cat.image.mediaItemUrl"
          format="avif, webp"
          densities="x1"
          class="modal_menu__item_img"
        />
      </NuxtLink>
    </li>

    <li v-if="viewport.isGreaterOrEquals('screen1280') && stock?.image" class="modal_menu__stock">
      <NuxtLink :to="`/stocks/${stock.slug}`">
        <NuxtImg :src="stock.image" format="avif, webp" densities="x1" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="css" scoped>
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

  /*  */
  @media (max-width: 1280px) {
    width: 100%;
    height: 220px;
  }
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

  /*  */
  @media (max-width: 1280px) {
    bottom: 10px;
    right: 10px;
  }
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
