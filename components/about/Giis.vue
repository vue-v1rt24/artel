<script setup lang="ts">
const viewport = useViewport();
</script>

<template>
  <div class="container">
    <div class="giis">
      <div class="giis__left">
        <div class="h3_32">
          Наша компания является участником ГИИС ДМДК
          <ImagesCheckboxWhite />
        </div>

        <p class="p_20">
          Все изделия маркированы, что подтверждает качество и легальность происхождения.
        </p>
      </div>

      <!--  -->
      <UiButton width="325px" title="Проверить изделие" bg="white" text-color="var(--main-green)" />

      <!--  -->
      <NuxtImg
        v-if="viewport.isGreaterOrEquals('screen769')"
        src="/images/about/Giis.png"
        format="avif, webp"
        densities="x1"
        loading="lazy"
        sizes="s1500:513px s1200:639px s1024:450px s576:317px"
        class="giis__img"
      />

      <NuxtImg
        v-else
        src="/images/about/Giis-mobile.png"
        format="avif, webp"
        densities="x1"
        loading="lazy"
        sizes="s576:317px s360:320px"
        class="giis__img"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.giis {
  position: relative;
  color: white;
  background-color: var(--main-green);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 62px;
  margin-bottom: 138px;
  overflow: hidden;

  /*  */
  @media (max-width: 1500px) {
    flex-direction: column;
    row-gap: 42px;
  }

  @media (max-width: 1280px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    padding: 42px;
    margin-bottom: 100px;
  }

  @media (max-width: 700px) {
    padding-bottom: 0;
  }

  @media (max-width: 576px) {
    row-gap: 32px;
    padding: 28px 28px 0 28px;
    margin-bottom: 60px;
  }
}

/*  */
.giis__left {
  position: relative;
  width: 450px;
  z-index: 1;

  /*  */
  @media (max-width: 576px) {
    width: 260px;
  }

  /*  */
  .h3_32 {
    color: white;
    margin-bottom: 22px;

    /*  */
    @media (max-width: 576px) {
      line-height: 0;
      margin-bottom: 16px;
    }
  }

  /*  */
  .p_20 {
    color: white;
  }

  /*  */
  svg {
    transform: translate(3px, 4px);

    /*  */
    @media (max-width: 1280px) {
      transform: translate(3px, 6px);
    }

    @media (max-width: 576px) {
      width: 22px;
      transform: translate(0px, 10px);
    }
  }
}

/*  */
.giis__img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  /*  */
  @media (max-width: 1600px) {
    margin-left: 60px;
  }

  @media (max-width: 1500px) {
    left: auto;
    right: 0;
    transform: translateX(0);
    margin-left: 0;
  }

  @media (max-width: 700px) {
    position: static;
  }
}

/*  */
.giis .btn {
  width: 282px;

  /*  */
  @media (max-width: 700px) {
    width: 100%;
  }
}
</style>
