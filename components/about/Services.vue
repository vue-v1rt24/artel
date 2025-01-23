<script setup lang="ts">
defineProps<{
  services: {
    servicesAboutUslugiRepeatZagolovok: string;
    servicesAboutUslugiRepeatTekst: string;
    servicesAboutUslugiRepeatTekstVModalnomOkne: string | null;
    servicesAboutUslugiRepeatIzobrazhenie: {
      node: {
        mediaItemUrl: string;
      };
    };
    servicesAboutUslugiRepeatSsylkaNaStraniczu: {
      nodes: [
        {
          slug: string;
        },
      ];
    } | null;
  }[];
}>();

//
const modal = useTemplateRef('modal');

//
const dataModal = ref<string | null>(null);

//
const dataModalHandler = (text: string) => {
  dataModal.value = text;
  modal.value?.modalOpen();
};
</script>

<template>
  <div class="services_bx">
    <div class="container">
      <h2 class="h2_56">Наши услуги:</h2>

      <!--  -->
      <div class="services">
        <div
          v-for="service in services"
          :key="service.servicesAboutUslugiRepeatZagolovok"
          class="service"
        >
          <div class="services__img">
            <img
              :src="service.servicesAboutUslugiRepeatIzobrazhenie.node?.mediaItemUrl"
              loading="lazy"
              alt=""
            />
          </div>

          <h3 class="h3_32">{{ service.servicesAboutUslugiRepeatZagolovok }}</h3>

          <p class="p_20">
            {{ service.servicesAboutUslugiRepeatTekst }}
          </p>

          <UiButton
            v-if="service?.servicesAboutUslugiRepeatSsylkaNaStraniczu"
            width="100%"
            title="Перейти"
            bg="white"
            text-color="var(--main-green)"
            @btn-click="
              $router.push(service.servicesAboutUslugiRepeatSsylkaNaStraniczu.nodes[0].slug)
            "
          />

          <UiButton
            v-else
            width="100%"
            title="Узнать подробнее"
            bg="white"
            text-color="var(--main-green)"
            @mousemove="
              dataModal =
                'текст для инициализации модального окна при наведении на кнопку. Он заменяется при открытии модального окна'
            "
            @btn-click="dataModalHandler(service.servicesAboutUslugiRepeatTekstVModalnomOkne!)"
          />
        </div>
      </div>
    </div>

    <Teleport v-if="dataModal" to="body">
      <UiModal id-modal="service_about" ref="modal">
        <ModalTemplateShell width="888px">
          <ModalTemplateLombard :data="dataModal" />
        </ModalTemplateShell>
      </UiModal>
    </Teleport>
  </div>
</template>

<style lang="css" scoped>
.services_bx {
  background-color: var(--green-50);
  padding: 100px 0;
  margin-top: 150px;

  /*  */
  @media (max-width: 1280px) {
    margin-top: 140px;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
    margin-top: 100px;
  }

  @media (max-width: 576px) {
    padding: 52px 0;
    margin-top: 60px;
  }
}

/*  */
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 60px;

  /*  */
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
  }

  @media (max-width: 1280px) {
    margin-top: 52px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 42px;
  }

  @media (max-width: 576px) {
    row-gap: 32px;
    margin-top: 32px;
  }
}

/*  */
.service {
  display: flex;
  flex-direction: column;
}

/*  */
.services__img {
  border-radius: 20px;
  overflow: hidden;

  /*  */
  @media (max-width: 576px) {
    border-radius: 16px;
  }

  /*  */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/*  */
.h3_32 {
  margin: 42px 0 26px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 32px 0 26px 0;
  }

  @media (max-width: 768px) {
    margin: 32px 0 24px 0;
  }

  @media (max-width: 576px) {
    margin: 24px 0 16px 0;
  }
}

/*  */
.p_20 {
  margin-bottom: 32px;

  /*  */
  @media (max-width: 768px) {
    margin-bottom: 36px;
  }

  @media (max-width: 576px) {
    margin-bottom: 26px;
  }
}

/*  */
.btn {
  margin-top: auto;
}
</style>
