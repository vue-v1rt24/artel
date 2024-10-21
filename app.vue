<script setup lang="ts">
useSeoMeta({
  titleTemplate(titleChunk) {
    return titleChunk ? titleChunk : 'Золотая Артель';
  },
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
