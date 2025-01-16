<script setup lang="ts">
defineProps<{
  material: {
    title: string;
    desc: string;
    img: string;
  };
}>();
</script>

<template>
  <div class="repair_bottom">
    <div class="repair_bottom-text">
      <div class="repair_bottom-title">{{ material.title }}</div>

      <div class="repair_bottom-box">
        <img src="/images/remontIzdelii/icon.svg" alt="" class="repair_bottom-img" />

        <div class="repair_bottom-descr">{{ material.desc }}</div>
      </div>
    </div>

    <div class="repair_bottom-right">
      <!-- <NuxtImg :src="material.img" format="avif, webp" densities="x1" alt="" /> -->
      <img :src="material.img" loading="lazy" alt="" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.repair_bottom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 72px;
  padding-top: 150px;

  /*  */
  @media (max-width: 1360px) {
    padding-top: 140px;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding-top: 100px;
    gap: 56px;
  }

  @media (max-width: 576px) {
    padding-top: 60px;
  }
}

.repair_bottom-text {
  align-content: center;
  max-width: 660px;

  /*  */
  @media (max-width: 1080px) {
    max-width: 100%;
  }
}

.repair_bottom-title {
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;

  /*  */
  @media (max-width: 1360px) {
    font-size: 26px;
  }

  @media (max-width: 1080px) {
    font-size: 26px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
}

.repair_bottom-box {
  padding-top: 42px;
  display: flex;
  gap: 24px;

  /*  */
  @media (max-width: 1360px) {
    padding-top: 38px;
  }

  @media (max-width: 1080px) {
    padding-top: 32px;
    max-width: 90%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 14px;
  }
}

.repair_bottom-img {
  width: 64px;

  /*  */
  @media (max-width: 576px) {
    width: 48px;
  }
}

.repair_bottom-descr {
  font-weight: 200;

  /*  */
  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.repair_bottom-right {
  border-radius: 20px;
  overflow: hidden;

  /*  */
  img {
    width: 100%;
  }
}
</style>
