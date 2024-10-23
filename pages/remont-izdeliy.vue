<script setup lang="ts">
const { data: remont } = await useFetch('/api/pages/remontIzdeliy');

console.log(remont.value);

//
useSeoMeta({
  title: remont.value?.seo.titleSeo,
  description: remont.value?.seo.descriptionSeo,
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
        <RemontIzdeliyMaterial
          v-if="remont?.remontIzdelii.remontMaterialZagolovok"
          :material="{
            title: remont.remontIzdelii.remontMaterialZagolovok,
            desc: remont.remontIzdelii.remontMaterialOpisanie,
            img: remont.remontIzdelii.remontMaterialIzobrazhenie.node.mediaItemUrl,
          }"
        />

        <!--  -->
        <SlidersWorks
          v-if="remont?.remontIzdelii.remontDoPosleRepeat"
          :works="remont.remontIzdelii.remontDoPosleRepeat"
        />
      </div>
    </div>

    <!--  -->
    <Form
      title="Выполним качественный ремонт Вашего изделия"
      desc="Оставьте заявку и наши специалисты свяжутся с вами для проведения консультации"
      subject="Выполним качественный ремонт Вашего изделия"
    />
  </div>
</template>

<style lang="css" scoped>
:deep(.preview_screen) {
  height: 574px;

  /*  */
  @media (max-width: 1280px) {
    height: 427px;
  }

  @media (max-width: 768px) {
    height: 390px;
  }

  @media (max-width: 576px) {
    height: 236px;
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
