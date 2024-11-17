<script setup lang="ts"></script>

<template>
  <NuxtLoadingIndicator />

  <div>
    <NuxtRouteAnnouncer />

    <!--  -->
    <Header />

    <!--  -->
    <div class="container">
      <div class="wrap">
        <div class="left">
          <h1 class="title">
            Данной страницы<br />
            не существует
          </h1>

          <div class="descr">Вы попали на несуществующий раздел сайта</div>

          <UiButton
            width="349px"
            title="Вернуться на главную"
            bg="var(--green-50)"
            text-color="var(--main-green)"
            @btn-click="clearError({ redirect: '/' })"
          ></UiButton>
        </div>

        <div class="right">
          <NuxtImg src="/images/404.webp" format="avif, webp" densities="x1" class="right-img" />
        </div>
      </div>
    </div>

    <!--  -->
    <Footer />
  </div>
</template>

<style lang="css" scoped>
.wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  padding-top: 50px;

  /*  */
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    gap: 62px;
  }

  @media (max-width: 480px) {
    gap: 52px;
  }
}

.title {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 72px;
  line-height: 100%;

  /*  */
  @media (max-width: 1360px) {
    font-size: 60px;
  }

  @media (max-width: 1180px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
}

.descr {
  font-weight: 200;
  padding: 32px 0 52px 0;

  /*  */
  @media (max-width: 1280px) {
    padding-top: 32px;
  }

  @media (max-width: 990px) {
    padding-top: 26px;
  }

  @media (max-width: 480px) {
    max-width: 270px;
    font-size: 15px;
    padding: 18px 0 32px;
  }
}

/*  */
.btn {
  @media (max-width: 768px) {
    width: 303px;
  }

  @media (max-width: 576px) {
    width: 281px;
  }
}

/*  */
.right-img {
  width: 100%;
}
</style>
