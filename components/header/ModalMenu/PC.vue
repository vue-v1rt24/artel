<script setup lang="ts">
const viewport = useViewport();

//
const { cats, stock } = defineProps<{
  cats: {
    databaseId: number;
    name: string;
    slug: string;
  }[];
  stock?: {
    image: string;
    slug: string;
  };
}>();

//
const emit = defineEmits<{
  eventClick: [];
}>();
</script>

<template>
  <ul class="modal_menu__list">
    <li
      v-for="cat in cats"
      :key="cat.databaseId"
      :class="['modal_menu__item', `modal_menu__item_${cat.slug}`]"
    >
      <NuxtLink
        :to="`/catalog/${cat.slug}`"
        class="modal_menu__item_link"
        @click="emit('eventClick')"
      >
        <span class="cat__title">{{ cat.name }}</span>
      </NuxtLink>
    </li>

    <li v-if="viewport.isGreaterOrEquals('screen1280') && stock?.image" class="modal_menu__stock">
      <NuxtLink :to="`/stocks/${stock.slug}`" @click="emit('eventClick')">
        <img :src="stock.image" loading="lazy" alt="" />
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
  border-radius: 20px;

  /*  */
  &.modal_menu__item_zoloto {
    background-color: var(--main--sand);
  }

  &.modal_menu__item_serebro {
    background-color: var(--low-green);
  }

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
  font-size: 28px;
  line-height: 90%;
  color: var(--main-green);
  padding: 42px;
}

/*  */
.modal_menu__stock {
  width: 785px;
  height: 315px;
  border-radius: 10px;
  overflow: hidden;
}

.modal_menu__stock img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
