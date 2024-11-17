<script setup lang="ts">
const { data: footer } = await useFetch('/api/getFooter');
</script>

<template>
  <footer class="footer">
    <div class="container">
      <FooterLocations
        v-if="footer"
        :addr-s="footer.adresVStavropole"
        :addr-m="footer.adresVMihajlovske"
        :email="footer.pochta"
        :phone="footer.nomerTelefona"
        :czentr-karty="footer.czentrKarty"
        :coords="footer.koordinatyKarty"
        :coords-mix="footer.koordinatyKartyAdresaVMihajlovske"
      />

      <!--  -->
      <FooterCopy
        v-if="footer?.vkontakte"
        :vk="footer.vkontakte"
        :telegram="footer.telegram"
        :whatsapp="footer.vatsap"
        :instagram="footer.instagram"
      />
    </div>
  </footer>
</template>

<style lang="css" scoped>
.footer {
  padding: 168px 0 44px 0;

  /*  */
  @media (max-width: 1280px) {
    padding: 140px 0 38px 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0 30px 0;
  }

  @media (max-width: 576px) {
    padding: 60px 0 24px 0;
  }
}
</style>
