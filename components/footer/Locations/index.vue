<script setup lang="ts"></script>

<template>
  <div class="locations">
    <FooterLocationsContacts />
    <FooterLocationsMap />
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
}
</style>
