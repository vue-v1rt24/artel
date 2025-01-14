<script setup lang="ts">
defineProps<{
  guardians: {
    title: string;
    desc: string;
    image1: string;
    image2: string;
  };
}>();
</script>

<template>
  <div class="guardians_art">
    <div class="guardians_art__left">
      <div class="guardians_art__left_text">
        <h3 class="h3_32">{{ guardians.title }}</h3>
        <p class="p_20">{{ guardians.desc }}</p>
      </div>
    </div>

    <div class="guardians_art__right">
      <NuxtImg :src="guardians.image1" densities="x1" format="avif, webp" loading="lazy" alt="" />
      <NuxtImg :src="guardians.image2" densities="x1" format="avif, webp" loading="lazy" alt="" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.guardians_art {
  position: relative;
  margin: 235px 0 235px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 200px 0 200px 0;
  }

  @media (max-width: 1250px) {
    margin: 140px 0 140px 0;
  }

  @media (max-width: 1140px) {
    margin: 100px 0 100px 0;
  }

  @media (max-width: 576px) {
    margin: 60px 0 60px 0;
  }
}

/*  */
.guardians_art__left {
  position: relative;
  background-color: var(--green-50);
  border-radius: 32px;
  padding: 82px;

  /*  */
  @media (max-width: 1500px) {
    padding: 62px;
  }

  @media (max-width: 1140px) {
    padding: 42px 42px 205px 42px;
  }

  @media (max-width: 576px) {
    padding: 28px 28px 200px 28px;
  }
}

/*  */
.guardians_art__left_text {
  position: relative;
  max-width: 630px;

  /*  */
  @media (max-width: 1500px) {
    max-width: 540px;
  }

  @media (max-width: 830px) {
    position: static;
  }
}

.guardians_art__left_text::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -188px;
  background-image: url(/images/home/guardians_art-decor.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 395px;
  height: 366px;
}

@media (max-width: 1440px) {
  .guardians_art__left_text::before {
    top: -53px;
    right: -155px;
  }
}

@media (max-width: 830px) {
  .guardians_art__left_text::before {
    top: 0;
    right: 0;
    width: 332px;
    height: 308px;
  }
}

@media (max-width: 576px) {
  .guardians_art__left_text::before {
    top: 45px;
    right: 10px;
    width: 140px;
    height: 130px;
  }
}

/*  */
.h3_32 {
  margin-bottom: 38px;

  /*  */
  @media (max-width: 576px) {
    margin-bottom: 22px;
  }
}

/*  */
.guardians_art__right {
  position: absolute;
  top: 50%;
  right: 82px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  /*  */
  @media (max-width: 1500px) {
    right: 0;
    row-gap: 20px;
  }

  @media (max-width: 1140px) {
    position: static;
    transform: translateY(0);
    margin-top: -170px;
  }

  /*  */
  img {
    border-radius: 32px;
    flex-shrink: 0;

    /*  */
    @media (max-width: 1280px) {
      max-width: 500px;
    }

    @media (max-width: 1250px) {
      max-width: 400px;
    }

    @media (max-width: 1140px) {
      width: 604px;
      max-width: 100%;
      border-radius: 24px;
      margin: 0 auto;

      &:last-child {
        display: none;
      }
    }

    @media (max-width: 576px) {
      border-radius: 20px;
    }
  }
}
</style>
