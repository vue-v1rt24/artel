<script setup lang="ts">
defineProps<{
  links: { title: string; link?: string }[];
  dark?: boolean;
}>();
</script>

<template>
  <div class="container">
    <div :class="['breadcrumbs', { dark }]">
      <NuxtLink to="/">Главная</NuxtLink>
      <span class="breadcrumbs_delimiter">/</span>

      <template v-for="item in links" :key="item.title">
        <template v-if="item.link">
          <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
          <span class="breadcrumbs_delimiter">/</span>
        </template>

        <span v-else class="active">{{ item.title }}</span>
      </template>
    </div>
  </div>
</template>

<style lang="css" scoped>
.breadcrumbs {
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  line-height: 90%;
  display: flex;
  align-items: center;
  column-gap: 14px;
  margin: 50px 0;

  /*  */
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 42px 0;
  }

  @media (max-width: 576px) {
    font-size: 13px;
    column-gap: 10px;
    margin: 24px 0 32px 0;
  }

  /*  */
  .breadcrumbs_delimiter {
    color: var(--gray-text);
  }

  /*  */
  a {
    color: var(--gray-text);
    transition: color var(--transition-speed);

    /*  */
    &:hover {
      color: var(--main-green);
    }

    .dark &:hover {
      color: var(--main--sand);
    }
  }
}

.dark .active {
  color: white;
}
</style>
