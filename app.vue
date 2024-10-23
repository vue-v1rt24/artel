<script setup lang="ts">
const route = useRoute();
const theme = useTheme();

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

    <Footer />
  </div>
</template>
