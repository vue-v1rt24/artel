<script setup lang="ts">
defineProps<{
  catalog: {
    title: string;
    desc: string;
    image1600: string;
    image1200: string;
    image688: string;
    image320: string;
  };
}>();

const viewport = useViewport();
</script>

<template>
  <div class="catalog_home_bx">
    <NuxtImg
      v-if="viewport.isGreaterOrEquals('screen1280')"
      :src="catalog.image1600"
      densities="x1"
      loading="lazy"
      format="webp"
      alt=""
    />

    <NuxtImg
      v-else-if="viewport.isGreaterOrEquals('screen768')"
      :src="catalog.image1200"
      densities="x1"
      loading="lazy"
      format="webp"
      alt=""
    />

    <NuxtImg
      v-else-if="viewport.isGreaterOrEquals('screen576')"
      :src="catalog.image688"
      densities="x1"
      loading="lazy"
      format="webp"
      alt=""
    />

    <NuxtImg v-else :src="catalog.image320" densities="x1" loading="lazy" format="webp" alt="" />

    <!--  -->
    <div class="catalog_home">
      <div class="catalog_home__text">
        <h2 class="h2_56">{{ catalog.title }}</h2>

        <p class="p_20">{{ catalog.desc }}</p>
      </div>

      <UiButton
        width="309px"
        title="Перейти в каталог"
        bg="white"
        bg-hover="var(--main--sand)"
        bg-active="var(--main--sand)"
        text-color="var(--main-green)"
        text-color-hover="var(--main-green)"
        text-color-active="var(--main-green)"
        @btn-click="$router.push('/catalog')"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.catalog_home_bx {
  position: relative;
  padding: 62px;
  margin-bottom: 150px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    padding: 42px;
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    padding: 28px 28px 226px 28px;
    margin-bottom: 60px;
  }
}

/*  */
.catalog_home_bx img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  border-radius: 32px;

  /*  */
  @media (max-width: 768px) {
    border-radius: 20px;
  }
}

/*  */
.catalog_home {
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 100px;

  /*  */
  @media (max-width: 1280px) {
    flex-direction: column;
    row-gap: 42px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 91px;
  }

  @media (max-width: 576px) {
    row-gap: 32px;
  }
}

/*  */
.catalog_home__text {
  max-width: 755px;

  /*  */
  @media (max-width: 1280px) {
    max-width: 537px;
  }

  @media (max-width: 768px) {
    max-width: 429px;
  }
}

.h2_56 {
  margin-bottom: 42px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }

  @media (max-width: 576px) {
    margin-bottom: 22px;
  }
}

:is(.h2_56, .p_20) {
  color: white;
}

/*  */
.catalog_home .btn {
  flex-shrink: 0;

  /*  */
  @media (max-width: 576px) {
    width: 100%;
  }
}
</style>
