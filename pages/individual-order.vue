<script setup lang="ts">
const { data: indOrder } = await useFetch('/api/pages/getIndividualOrder');

// console.log(indOrder.value);

//
useSeoMeta({
  title: indOrder.value?.seo.titleSeo,
  description: indOrder.value?.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs dark :links="[{ title: 'Индивидуальный заказ' }]" />

    <!-- Первый экран -->
    <PreviewScreen
      v-if="indOrder?.previewScreenPage"
      :preview-screen-page="indOrder.previewScreenPage"
    />

    <!--  -->
    <section class="order">
      <div class="container">
        <!-- Этапы работы с индивидуальным заказом -->
        <IndividualOrderSteps v-if="indOrder?.etapy" :staps="indOrder.etapy" />

        <!-- Предоставления -->
        <IndividualOrderPresents
          v-if="indOrder?.predostavleniya"
          :presents="indOrder.predostavleniya"
        />
      </div>
    </section>

    <!--  -->
    <SlidersGallery
      v-if="indOrder?.gallery"
      :gallery="indOrder.gallery"
      title='"Золотая Артель" - Ваш путеводитель в мире ювелирного искусства.'
      desc="Мы стремимся к тому, чтобы каждый наш клиент почувствовал себя особенным и нашел у нас то, что искал."
      loop
      autoplay
      pause-on-mouse-enter
    />

    <!--  -->
    <Form
      title="Создадим для Вас индивидуальное украшение"
      desc="Оставьте заявку и наши специалисты свяжутся с вами для проведения консультации"
      subject="Создадим для Вас индивидуальное украшение"
    />
  </div>
</template>

<style lang="css" scoped>
:deep(.preview_screen) {
  height: 630px;

  /*  */
  @media (max-width: 1280px) {
    height: 605px;
  }

  @media (max-width: 768px) {
    height: 516px;
  }

  @media (max-width: 576px) {
    height: 384px;
  }
}

/*  */
.order {
  padding: 100px 0 150px 0;

  /*  */
  @media (max-width: 1360px) {
    padding: 80px 0 140px 0;
  }

  @media (max-width: 1080px) {
    padding: 60px 0 100px 0;
  }

  @media (max-width: 680px) {
    padding: 40px 0 60px 0;
  }
}
</style>
