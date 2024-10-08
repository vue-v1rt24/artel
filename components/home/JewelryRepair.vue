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

          <NuxtImg
            :src="item.jewelryRepairVidyRemontaIzobrazhenie.node.mediaItemUrl"
            format="avif, webp"
            densities="x1"
            loading="lazy"
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
}

/*  */
.jewelry_repair .h2_56 {
  color: white;
  margin-bottom: 60px;
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
}

.jewelry_repair__list_item {
  position: relative;

  /*  */
  img {
    border-radius: 20px;
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
}

/*  */
.jewelry_repair__podlozhka {
  background-color: var(--main--sand);
  border-radius: 20px;
  padding: 62px;
}

.jewelry_repair__podlozhka_text {
  max-width: 785px;
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 24px;
  line-height: 140%;
  color: var(--main-green);

  /*  */
  :global(span) {
    font-weight: 500;
  }
}
</style>
