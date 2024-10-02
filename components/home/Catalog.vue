<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="catalog_home_bx">
    <NuxtImg
      v-if="viewport.isGreaterOrEquals('screen1280')"
      src="/images/home/catalog/catalog-home-1920.jpg"
      densities="x1"
      loading="lazy"
      format="avif, webp"
    />

    <NuxtImg
      v-else-if="viewport.isGreaterOrEquals('screen768')"
      src="/images/home/catalog/catalog-home-1280.jpg"
      densities="x1"
      loading="lazy"
      format="avif, webp"
    />

    <NuxtImg
      v-else-if="viewport.isGreaterOrEquals('screen576')"
      src="/images/home/catalog/catalog-home-768.jpg"
      densities="x1"
      loading="lazy"
      format="avif, webp"
    />

    <NuxtImg
      v-else
      src="/images/home/catalog/catalog-home-360.jpg"
      densities="x1"
      loading="lazy"
      format="avif, webp"
    />

    <!--  -->
    <div class="catalog_home">
      <div class="catalog_home__text">
        <h2 class="h2_56">Каталог</h2>

        <p class="p_20">
          Ювелирный каталог магазина «Золотая Артель» представляет Вашему вниманию огромный выбор
          украшений из золота и серебра. Кольца, серьги, подвески и множество других великолепных
          изделий порадуют Вас оригинальным дизайном, качественным исполнением и приятными ценами. 
        </p>
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
