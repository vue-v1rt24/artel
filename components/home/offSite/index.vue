<script setup lang="ts">
const { data: sliders } = await useFetch('/api/getImageOffSite');

//
defineProps<{
  content: {
    homeOffSiteZagolovok: string;
    homeOffSitePodzagolovok: string;
    homeOffSiteTekst1: string;
    homeOffSiteTekst2: string;
    image: string;
  };
}>();
</script>

<template>
  <div class="off_site">
    <div class="off_site__left">
      <h2 class="h2_56">{{ content.homeOffSiteZagolovok }}</h2>

      <h3 class="h3_32">{{ content.homeOffSitePodzagolovok }}</h3>

      <p class="p_20">{{ content.homeOffSiteTekst1 }}</p>

      <p class="p_20">{{ content.homeOffSiteTekst2 }}</p>
    </div>

    <!--  -->
    <div class="off_site__right">
      <HomeOffSiteSlider v-if="sliders?.length && sliders.length > 7" :sliders />
      <img :src="content.image" class="off_site__right_img" alt="" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.off_site {
  position: relative;
  display: flex;
  column-gap: 56px;
  margin-bottom: 126px;

  /*  */
  @media (max-width: 1400px) {
    padding-bottom: 224px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 130px;
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
}

/*  */
.off_site__left .h2_56 {
  margin-bottom: 60px;

  /*  */
  @media (max-width: 1400px) {
    font-size: 48px;
    margin-bottom: 52px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
    margin-bottom: 32px;
  }
}

.off_site__left .h3_32 {
  margin-bottom: 32px;

  /*  */
  @media (max-width: 1400px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    margin-bottom: 26px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
}

.off_site__left .p_20 {
  max-width: 644px;

  /*  */
  @media (max-width: 1200px) {
    max-width: 100%;
  }
}

.off_site__left .p_20:not(:last-child) {
  margin-bottom: 40px;

  /*  */
  @media (max-width: 1400px) {
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
}

/*  */
.off_site__right {
  height: 546px;
  flex-shrink: 0;
  display: flex;
  column-gap: 30px;

  /*  */
  @media (max-width: 1200px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    height: 477px;
    column-gap: unset;
  }

  @media (max-width: 750px) {
    zoom: 0.9;
  }

  @media (max-width: 700px) {
    zoom: 0.8;
  }

  @media (max-width: 630px) {
    zoom: 0.74;
  }

  @media (max-width: 576px) {
    height: auto;
    zoom: 1;
    flex-direction: column;
    margin-top: 32px;
  }
}

/*  */
.off_site__right_img {
  @media (max-width: 1200px) {
    margin: 0 auto;
  }
}
</style>
