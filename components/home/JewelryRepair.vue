<script setup lang="ts">
defineProps<{
  jewelryRepair: {
    title: string;
    desc: string;
    typesRepairs: {
      jewelryRepairVidyRemontaTekstNaKartinke: string;
      jewelryRepairVidyRemontaIzobrazhenie: {
        node: {
          mediaItemUrl: string;
        };
      };
    }[];
    textPodlozhki: string;
  };
}>();
</script>

<template>
  <div class="jewelry_repair">
    <div class="container">
      <h2 class="h2_56">{{ jewelryRepair.title }}</h2>

      <p class="p_20">{{ jewelryRepair.desc }}</p>

      <!--  -->
      <ul class="jewelry_repair__list">
        <li
          v-for="item in jewelryRepair.typesRepairs"
          :key="item.jewelryRepairVidyRemontaTekstNaKartinke"
          class="jewelry_repair__list_item"
        >
          <span class="jewelry_repair__list_title">
            {{ item.jewelryRepairVidyRemontaTekstNaKartinke }}
          </span>

          <img
            :src="item.jewelryRepairVidyRemontaIzobrazhenie.node?.mediaItemUrl"
            loading="lazy"
            alt=""
          />
        </li>
      </ul>

      <!--  -->
      <div class="jewelry_repair__podlozhka">
        <p
          v-if="jewelryRepair.textPodlozhki"
          v-html="jewelryRepair.textPodlozhki"
          class="jewelry_repair__podlozhka_text"
        ></p>

        <div class="jewelry_repair__podlozhka_asd">
          <img src="/images/home/jewelry_repair-almaz.webp" loading="lazy" alt="" />

          <UiButton
            width="233px"
            title="Подробнее"
            text-color="var(--main-green)"
            bg="white"
            bg-hover="var(--main-green)"
            @btn-click="$router.push('/remont-izdeliy')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.jewelry_repair {
  background-color: var(--main-green);
  background-image: url(/public/images/home/decor_jewelry_repair.svg);
  background-repeat: no-repeat;
  background-position: right top;
  padding: 120px 0;

  /*  */
  @media (max-width: 1280px) {
    padding: 100px 0;
    background-position-x: left;
  }

  @media (max-width: 1024px) {
    padding: 80px 0;
    background-size: 100%;
  }

  @media (max-width: 576px) {
    background-image: none;
    padding: 52px 0;
  }
}

/*  */
.jewelry_repair .h2_56 {
  color: white;
  margin-bottom: 60px;

  /*  */
  @media (max-width: 1280px) {
    margin-bottom: 52px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 42px;
  }

  @media (max-width: 576px) {
    margin-bottom: 22px;
  }
}

/*  */
.jewelry_repair .p_20 {
  max-width: 492px;
  color: white;
}

/*  */
.jewelry_repair__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 42px 0 60px 0;

  /*  */
  @media (max-width: 1280px) {
    gap: 20px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 42px 0 52px 0;
  }

  @media (max-width: 576px) {
    margin: 32px 0 32px 0;
  }
}

.jewelry_repair__list_item {
  position: relative;
  aspect-ratio: 1 / 0.66;
  border-radius: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 768px) {
    /* height: 390px; */
  }

  @media (max-width: 576px) {
    /* height: 320px; */
  }

  @media (max-width: 480px) {
    /* height: 250px; */
  }

  @media (max-width: 375px) {
    /* height: 190px; */
  }

  /*  */
  img {
    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
}

.jewelry_repair__list_title {
  position: absolute;
  top: 26px;
  left: 26px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: var(--main-green);
  background-color: white;
  border-radius: 50px;
  padding: 12px 16px;
  z-index: 1;

  /*  */
  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    top: 16px;
    left: 16px;
    font-size: 16px;
  }
}

/*  */
.jewelry_repair__podlozhka {
  background-color: var(--main--sand);
  border-radius: 20px;
  display: flex;
  padding: 62px 62px 0 62px;
  overflow: hidden;

  /*  */
  @media (max-width: 1024px) {
    padding: 32px 32px 0 32px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 28px 28px 0 28px;
  }
}

.jewelry_repair__podlozhka_text {
  max-width: 785px;
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 24px;
  line-height: 140%;
  color: var(--main-green);
  padding-bottom: 62px;

  /*  */
  :global(span) {
    font-weight: 500;
  }

  /*  */
  @media (max-width: 1280px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 32px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.jewelry_repair__podlozhka_asd {
  display: flex;
  flex-shrink: 0;
  column-gap: 50px;

  /*  */
  @media (max-width: 1400px) {
    column-gap: 0;
  }

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
    row-gap: 30px;
  }
}

.jewelry_repair__podlozhka img {
  flex-shrink: 0;
  align-self: flex-end;

  /*  */
  @media (max-width: 1280px) {
    width: 290px;
  }

  @media (max-width: 768px) {
    width: 284px;
    max-width: 284px;
    transform: translateX(65px);
  }

  @media (max-width: 576px) {
    width: 320px;
    max-width: 320px;
  }
}

.jewelry_repair__podlozhka .btn {
  flex-shrink: 0;
  margin-left: auto;
  margin-bottom: auto;

  /*  */
  @media (max-width: 768px) {
    width: 198px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
}
</style>
