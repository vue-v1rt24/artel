<script setup lang="ts">
// Мета данные
useSeoMeta({
  title: 'Отправка заявки',
  // description: '',
});
</script>

<template>
  <div class="success_page">
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Заявка отправлена' }]" />

    <!--  -->
    <div class="container">
      <div class="success_page__bx">
        <div class="success_page__left">
          <h1 class="h2_72">Ваша заявка успешно отправлена</h1>

          <p class="p_20">В ближайшее время мы свяжемся с Вами</p>

          <UiButton
            width="349px"
            title="Вернуться на главную"
            bg="var(--green-50)"
            text-color="var(--main-green)"
            @btn-click="$router.push('/')"
          />
        </div>

        <!--  -->
        <div class="success_page__right">
          <img
            src="/images/successPage/veshalka.png"
            class="success_page__veshalka"
            loading="lazy"
            alt=""
          />

          <img
            src="/images/successPage/blik.png"
            class="success_page__blik"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.success_page {
  overflow: hidden;
}

/*  */
.success_page__bx {
  position: relative;

  /*  */
  @media (max-width: 1199px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 375px;
  }

  @media (max-width: 730px) {
    height: auto;
  }
}

/*  */
.success_page__left {
  max-width: 730px;

  /*  */
  @media (max-width: 576px) {
    .btn {
      width: 281px;
    }
  }
}

/*  */
.p_20 {
  margin: 42px 0 52px 0;
}

/*  */
.success_page__right {
  position: absolute;
  top: -60px;
  right: 125px;

  /*  */
  @media (max-width: 1500px) {
    right: 0;
  }

  @media (max-width: 1199px) {
    top: auto;
    bottom: 0;
    width: 350px;
  }

  @media (max-width: 900px) {
    right: -70px;
  }

  @media (max-width: 730px) {
    position: relative;
    right: auto;
    margin: 42px auto 0 auto;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
}

/*  */
.success_page__blik {
  position: absolute;
  top: 95px;
  left: 117px;
  scale: 0;
  mix-blend-mode: screen;
  animation: blik 3s infinite;

  /*  */
  @media (max-width: 1199px) {
    top: 70px;
    left: 87px;
    width: 110px;
  }

  @media (max-width: 576px) {
    top: 64px;
    left: 79px;
    width: 100px;
  }
}

@keyframes blik {
  0%,
  100% {
    scale: 0;
    rotate: 0deg;
  }
  40% {
    scale: 0.5;
  }
  60% {
    scale: 0;
    rotate: 0deg;
  }
  80% {
    scale: 1;
    rotate: 90deg;
  }
  99% {
    rotate: 90deg;
  }
}
</style>
