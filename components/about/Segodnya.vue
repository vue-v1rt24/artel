<script setup lang="ts">
defineProps<{
  segodnya: {
    aboutSegodnyaGroupZagolovok: string;
    aboutSegodnyaGroupVarianty: {
      aboutSegodnyaGroupVariantyTekst: string;
      aboutSegodnyaGroupVariantyIzobrazhenie: {
        node: {
          mediaItemUrl: string;
        };
      };
    }[];
  };
}>();
</script>

<template>
  <div class="segodnya container">
    <h2 class="h2_56">{{ segodnya.aboutSegodnyaGroupZagolovok }}</h2>

    <!--  -->
    <ul class="segodnya_list">
      <li
        v-for="item in segodnya.aboutSegodnyaGroupVarianty"
        :key="item.aboutSegodnyaGroupVariantyTekst"
        class="segodnya_list__item"
      >
        <div class="segodnya_list__img">
          <img :src="item.aboutSegodnyaGroupVariantyIzobrazhenie.node.mediaItemUrl" alt="" />
        </div>

        <div class="segodnya_list__desc">{{ item.aboutSegodnyaGroupVariantyTekst }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.segodnya {
  margin-bottom: 162px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;
  }

  /*  */
  .h2_56 {
    text-align: center;
  }
}

/*  */
.segodnya_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 60px;

  /*  */
  @media (max-width: 1280px) {
    margin-top: 52px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  @media (max-width: 576px) {
    margin-top: 32px;
  }
}

.segodnya_list__item {
  text-align: center;
  border: 2px solid var(--low-green);
  border-radius: 24px;
  padding: 52px;

  /*  */
  @media (max-width: 1500px) {
    padding: 42px;
  }

  @media (max-width: 576px) {
    border-radius: 20px;
    padding: 32px;
  }
}

.segodnya_list__img {
  margin: 0 auto 40px auto;
  margin-bottom: 40px;

  /*  */
  @media (max-width: 1500px) {
    width: 140px;
    margin-bottom: 32px;
  }

  @media (max-width: 576px) {
    width: 90px;
    margin-bottom: 18px;
  }
}

.segodnya_list__desc {
  font-weight: 300;
  font-size: 24px;
  line-height: 130%;
  color: var(--main-green);

  /*  */
  @media (max-width: 1500px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
}
</style>
