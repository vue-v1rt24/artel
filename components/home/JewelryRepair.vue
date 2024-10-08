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
            class="jewelry_repair__list_image"
          />
        </li>
      </ul>

      <!--  -->
      <div class="jewelry_repair__podlozhka">
        <p class="jewelry_repair__podlozhka_text">
          {{ jewelryRepair.textPodlozhki }}
        </p>
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
  padding: 120px 160px;
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
</style>
