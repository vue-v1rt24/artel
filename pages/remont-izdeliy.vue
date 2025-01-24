<script setup lang="ts">
const { data: remont } = await useFetch('/api/pages/remontIzdeliy');

// console.log(remont.value);

//
useSeoMeta({
  title: remont.value?.seo.titleSeo,
  description: remont.value?.seo.descriptionSeo,
});

//
onMounted(() => {
  sdvigGallery();
});
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs dark :links="[{ title: 'Ремонт ювелирных изделий' }]" />

    <!-- Первый экран -->
    <PreviewScreen
      v-if="remont?.previewScreenPage"
      :preview-screen-page="remont.previewScreenPage"
    />

    <!--  -->
    <div class="repair">
      <div class="container">
        <RemontIzdeliyTypes
          v-if="remont?.remontIzdelii.varianty"
          :types="{
            title: remont.remontIzdelii.remontZagolovok,
            variants: remont.remontIzdelii.varianty,
          }"
        />

        <!--  -->
        <SlidersResultWorksMasters
          v-if="remont?.remontIzdelii.remontDoPosleRepeat"
          :works="remont.remontIzdelii.remontDoPosleRepeat"
        />

        <!--  -->
        <RemontIzdeliyMaterial
          v-if="remont?.remontIzdelii.remontMaterialZagolovok"
          :material="{
            title: remont.remontIzdelii.remontMaterialZagolovok,
            desc: remont.remontIzdelii.remontMaterialOpisanie,
            img: remont.remontIzdelii.remontMaterialIzobrazhenie.node?.mediaItemUrl,
          }"
        />
      </div>
    </div>

    <!--  -->
    <Form
      title="Выполним качественный ремонт Вашего изделия"
      desc="Оставьте заявку, и наши специалисты свяжутся с Вами для проведения консультации"
      subject="Ремонт изделий"
    />
  </div>
</template>

<style lang="css" scoped>
:deep(.preview_screen) {
  height: 574px;

  /*  */
  @media (max-width: 1280px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 415px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
}

/*  */
.repair {
  padding: 100px 0 0 0;

  /*  */
  @media (max-width: 1360px) {
    padding: 80px 0 0 0;
  }

  @media (max-width: 1080px) {
    padding: 60px 0 0 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0 0 0;
  }
}
</style>
