<script setup lang="ts">
defineProps<{
  services: {
    servicesAboutUslugiRepeatZagolovok: string;
    servicesAboutUslugiRepeatTekst: string;
    servicesAboutUslugiRepeatTekstVModalnomOkne: string | null;
    servicesAboutUslugiRepeatIzobrazhenie: {
      node: {
        mediaItemUrl: string;
      };
    };
    servicesAboutUslugiRepeatSsylkaNaStraniczu: {
      nodes: [
        {
          slug: string;
        },
      ];
    } | null;
  }[];
}>();
</script>

<template>
  <div>
    <pre>{{ services }}</pre>
  </div>
</template>

<style lang="css" scoped></style>
