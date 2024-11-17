<script setup lang="ts">
defineProps<{
  addrS: string;
  addrM: string;
  email: string;
  phone: string;
  czentrKarty: string;
  coords: string;
  coordsMix: string;
}>();
</script>

<template>
  <div class="locations">
    <FooterLocationsContacts :stav="addrS" :mix="addrM" :email :phone />

    <FooterLocationsMap
      v-if="czentrKarty && coords && coordsMix"
      :czentr-karty="czentrKarty"
      :coords
      :coords-mix="coordsMix"
    />
  </div>
</template>

<style lang="css" scoped>
.locations {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;

  /*  */
  @media (max-width: 1280px) {
    flex-direction: column;
    row-gap: 60px;
  }

  @media (max-width: 768px) {
    row-gap: 42px;
  }

  @media (max-width: 576px) {
    row-gap: 32px;
  }
}
</style>
