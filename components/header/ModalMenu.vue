<script setup lang="ts">
const props = defineProps<{
  cats: {
    databaseId: number;
    name: string;
    slug: string;
  }[];
}>();

console.log(props.cats);
</script>

<template>
  <div class="modal_menu">
    <div class="container">
      <ul class="modal_menu__list">
        <li v-for="cat in cats" :key="cat.databaseId" class="modal_menu__item">
          <NuxtLink
            :to="{ path: '/categories', query: { cat: cat.slug } }"
            class="modal_menu__item_link"
          >
            <span class="cat__title">{{ cat.name }}</span>
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
  background-color: rgba(156, 0, 0, 0.116);
  padding-top: 190px;
}

/*  */
.modal_menu__list {
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
</style>
