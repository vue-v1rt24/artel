<script setup lang="ts">
const route = useRoute();
const theme = useTheme();
const isFooter = ref(false);

//
useSeoMeta({
  titleTemplate(titleChunk) {
    return titleChunk ? titleChunk : 'Золотая Артель';
  },
});

//
watchEffect(() => {
  if (
    route.path.includes('individual-order') ||
    route.path.includes('remont-izdeliy') ||
    route.path.includes('about')
  ) {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }

  if (route.path.includes('contacts')) {
    isFooter.value = false;
  } else {
    isFooter.value = true;
  }
});
</script>

<template>
  <NuxtLoadingIndicator />
  <div>
    <NuxtRouteAnnouncer />

    <Header />

    <main>
      <NuxtPage />
    </main>

    <Footer v-if="isFooter" />

    <UiUpButton />

    <UiMessage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
