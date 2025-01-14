<script setup lang="ts">
defineProps<{
  types: {
    title: string;
    variants: {
      remontIzobrazhenie: {
        node: {
          mediaItemUrl: string;
        };
      };
      remontNazvanieKnopki: string;
      remontNazvanieRemonta: string;
    }[];
  };
}>();

//
const modal = useTemplateRef('modal');
const titleModal = ref('');
const typeSubjectForm = ref('');

//
const modalOpen = (idx: number) => {
  if (idx === 0) {
    titleModal.value = 'восстановление';
    typeSubjectForm.value = 'восстановление';
  } else if (idx === 1) {
    titleModal.value = 'чистку';
    typeSubjectForm.value = 'чистка';
  } else if (idx === 2) {
    titleModal.value = 'полировку';
    typeSubjectForm.value = 'полировка';
  }

  modal.value?.modalOpen();
};
</script>

<template>
  <h2 class="repair-title">
    {{ types.title }}
  </h2>

  <div class="repair_top">
    <div
      v-for="(item, key) in types.variants"
      :key="item.remontNazvanieRemonta"
      class="repair_item"
    >
      <div class="repair_item-title">{{ item.remontNazvanieRemonta }}</div>

      <NuxtImg
        :src="item.remontIzobrazhenie.node?.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="repair_item-img"
        alt=""
      />

      <UiButton
        width="100%"
        :title="item.remontNazvanieKnopki"
        bg="var(--green-50)"
        text-color="var(--main-green)"
        @btn-click="modalOpen(key)"
        class="repair_item-link"
      />
    </div>
  </div>

  <!--  -->
  <Teleport to="body">
    <UiModal id-modal="remont-izdelii" ref="modal">
      <ModalTemplateShell>
        <ModalTemplateFindAvailability
          form-class="remont-izdelii-form"
          :title="`Закажите ${titleModal} ювелирного изделия`"
          :subject="`Вид ремонта: ${typeSubjectForm}`"
          btn-submit-title="Заказать"
        />
      </ModalTemplateShell>
    </UiModal>
  </Teleport>
</template>

<style lang="css" scoped>
.repair-title {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 110%;
  max-width: 990px;

  /*  */
  @media (max-width: 1360px) {
    font-size: 48px;
  }

  @media (max-width: 1080px) {
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
}

.repair_top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 52px;
  padding: 60px 0 150px 0;

  /*  */
  @media (max-width: 1360px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 52px 0 140px 0;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 42px;
    padding-bottom: 100px;
  }

  @media (max-width: 576px) {
    padding: 32px 0 60px 0;
    gap: 32px;
  }
}

.repair_item {
  position: relative;
}

.repair_item-title {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  background-color: #fff;
  border-radius: 50px;
  padding: 12px 16px;
  position: absolute;
  top: 26px;
  left: 26px;

  /*  */
  @media (max-width: 576px) {
    top: 16px;
    left: 16px;
    font-size: 16px;
  }
}

.repair_item-img {
  width: 100%;
  border-radius: 20px;
}

.repair_item-link {
  margin-top: 32px;

  /*  */
  @media (max-width: 1080px) {
    margin-top: 24px;
  }

  @media (max-width: 576px) {
    margin-top: 18px;
  }
}
</style>
