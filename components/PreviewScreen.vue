<script setup lang="ts">
defineProps<{
  title?: string;
  previewScreenPage: {
    previewScreenZagolovok: string;
    previewScreenOpisanie: string;
    previewScreenIzobrazhenie1920: {
      node: {
        mediaItemUrl: string;
      };
    };
    previewScreenIzobrazhenie1280: {
      node: {
        mediaItemUrl: string;
      };
    };
    previewScreenIzobrazhenie768: {
      node: {
        mediaItemUrl: string;
      };
    };
  };
}>();

//
const viewport = useViewport();
</script>

<template>
  <section class="preview_screen">
    <div class="container">
      <NuxtImg
        v-if="viewport.isGreaterOrEquals('screen1281')"
        :src="previewScreenPage.previewScreenIzobrazhenie1920.node.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="preview_screen__img"
      />

      <NuxtImg
        v-if="viewport.isGreaterOrEquals('screen769') && viewport.isLessThan('screen1281')"
        :src="previewScreenPage.previewScreenIzobrazhenie1280.node.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="preview_screen__img"
      />

      <NuxtImg
        v-if="viewport.isLessOrEquals('screen768')"
        :src="previewScreenPage.previewScreenIzobrazhenie768.node.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="preview_screen__img"
      />

      <div class="preview_screen__text">
        <div v-if="title" :class="{ title }">
          <h1 class="h2_72">{{ title }}</h1>
          <h2 class="h2_56">{{ previewScreenPage.previewScreenZagolovok }}</h2>
        </div>

        <h1 v-else class="h2_72">{{ previewScreenPage.previewScreenZagolovok }}</h1>

        <div v-html="previewScreenPage.previewScreenOpisanie" class="p_20"></div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.preview_screen {
  position: relative;
  margin-top: -259px;
  z-index: -1;

  /*  */
  @media (max-width: 1280px) {
    margin-top: -240px;
  }

  @media (max-width: 768px) {
    margin-top: -224px;
  }

  @media (max-width: 576px) {
    margin-top: -150px;
  }
}

.preview_screen__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/*  */
.title {
  margin-bottom: 42px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 38px;
  }

  @media (max-width: 768px) {
    margin-bottom: 26px;
  }

  @media (max-width: 576px) {
    margin-bottom: 22px;
  }
}

/*  */
.h2_72 {
  max-width: 670px;
  color: white;
  padding-top: 247px;
  margin-bottom: 42px;

  /*  */
  .title & {
    margin-bottom: 80px;
  }

  /*  */
  @media (max-width: 1280px) {
    max-width: 585px;
    margin-bottom: 38px;

    /*  */
    .title & {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 768px) {
    max-width: 483px;
    padding-top: 220px;
    margin-bottom: 26px;

    /*  */
    .title & {
      margin-bottom: 42px;
    }
  }

  @media (max-width: 576px) {
    padding-top: 150px;
    margin-bottom: 22px;
  }

  @media (max-width: 480px) {
    max-width: 260px;
  }
}

.h2_56 {
  max-width: 921px;
  color: white;
}

.p_20 {
  max-width: 670px;
  color: white;
  padding-bottom: 80px;

  /*  */
  @media (max-width: 1280px) {
    max-width: 585px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    padding-bottom: 40px;
  }
}
</style>
