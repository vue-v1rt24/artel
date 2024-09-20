<script setup lang="ts"></script>

<template>
  <div class="off_site">
    <div class="off_site__left">
      <h2 class="h2_56">Официальный сайт магазина «Золотая Артель»</h2>

      <h3 class="h3_32">Неповторимый стиль</h3>

      <p class="p_20">
        Мы рады познакомить Вас с авторскими изделиями, которые уже много лет притягивают к себе
        взгляды любителей всего удивительного и уникального. Наши украшения и аксессуары – это
        наполненные вдохновением ювелирные сокровища, воплощенные в сложные фантазийные формы.
      </p>

      <p class="p_20">
        Сияние драгоценных камней, блеск золота и серебра в исполнении ведущих производителей уже
        много лет приносят радость своим обладателям, подчеркивают их индивидуальность и раскрывают
        характер.
      </p>
    </div>

    <!--  -->
    <div class="off_site__right">
      <NuxtImg src="/images/off-site.jpg" width="581" densities="x1" format="avif, webp" />

      <HomeOffSiteSlider />
    </div>
  </div>
</template>

<style lang="css" scoped>
.off_site__left .h2_56 {
  margin-bottom: 60px;
}

.off_site__left .h3_32 {
  margin-bottom: 32px;
}

.off_site__left .p_20:not(:last-child) {
  margin-bottom: 40px;
}
</style>
