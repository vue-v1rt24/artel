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
  if (route.path.includes('individual-order') || route.path.includes('remont-izdeliy')) {
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
  </div>
</template>
