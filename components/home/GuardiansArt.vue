<script setup lang="ts"></script>

<template>
  <div class="guardians_art">
    <div class="guardians_art__left">
      <div class="guardians_art__left_text">
        <h3 class="h3_32">Хранители ювелирного искусства</h3>

        <p class="p_20">
          Мы открываем двери в мир известных отечественных брендов, являясь их официальными
          представителями. В любом из наших магазинов Вас будут ждать изящные украшения ведущих
          ювелирных домов России. Наши эксперты помогут подобрать идеально подходящую модель
          драгоценного изделия. Мы знаем, подчеркнуть Вашу красоту и заставить сиять! Приходите
          знакомиться с миром ювелирной моды в магазины сети «Золотая Артель».
        </p>
      </div>
    </div>

    <div class="guardians_art__right"></div>
  </div>
</template>

<style lang="css" scoped>
.guardians_art {
  margin: 235px 0 235px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 200px 0 200px 0;
  }

  @media (max-width: 768px) {
    margin: 100px 0 100px 0;
  }

  @media (max-width: 576px) {
    margin: 60px 0 60px 0;
  }
}

/*  */
.guardians_art__left {
  width: 100%;
  background-color: var(--green-50);
  border-radius: 32px;
  padding: 82px;
}

/*  */
.guardians_art__left_text {
  position: relative;
  max-width: 630px;
}

.guardians_art__left_text::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -195px;
  background-image: url(/public/images/home/guardians_art-decor.svg);
  background-repeat: no-repeat;
  width: 395px;
  height: 366px;
}

/*  */
.h3_32 {
  margin-bottom: 38px;
}

/*  */
.p_20 {
}
</style>
