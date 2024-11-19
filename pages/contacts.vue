<script setup lang="ts">
const { data: contacts } = await useFetch('/api/pages/contacts');

// console.log(contacts.value);

//
useSeoMeta({
  title: contacts.value?.seo.titleSeo,
  description: contacts.value?.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs :links="[{ title: 'Контакты' }]" />

    <!--  -->
    <div class="container">
      <div class="contacts_wrap">
        <img src="/images/contacts/bg.svg" class="contacts_bg" />

        <h1 class="h2_72">Контакты</h1>

        <div class="contacts_text">
          Добро пожаловать в раздел «Контакты» нашего официального сайта ювелирного магазина
          «Золотая Артель»!
        </div>
        <div class="contacts_descr">
          Если у Вас возникли вопросы, предложения или Вы хотите оставить отзыв о нашем ювелирном
          магазине, мы всегда рады помочь.
        </div>

        <!-- --------- Контакты плашки --------- -->

        <div class="contacts_box">
          <div class="contacts_item">
            <div class="contacts_item-title">Мы ждём Вас в наших магазинах по адресам:</div>
            <div class="contacts_item-wrap">
              <div class="contacts_link-box">
                <img src="/images/location.svg" alt="" class="contacts_item-img" />

                <div class="contacts_item-text">
                  <div class="contacts_link-title">г. Ставрополь</div>
                  <div class="contacts_item-link adres">
                    {{ contacts?.contacts.adresVStavropole }}
                  </div>
                </div>
              </div>

              <div class="contacts_link-box">
                <img src="/images/location.svg" alt="" class="contacts_item-img" />

                <div class="contacts_item-text">
                  <div class="contacts_link-title">г. Михайловск</div>
                  <div class="contacts_item-link adres">
                    {{ contacts?.contacts.adresVMihajlovske }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contacts_item">
            <div class="contacts_item-title">Наши контакты</div>
            <div class="contacts_item-wrap">
              <div class="contacts_link-box">
                <img src="/images/email.svg" alt="" class="contacts_item-img" />

                <div v-if="contacts?.contacts.pochta" class="contacts_item-text">
                  <div class="contacts_link-title">Электронный адрес</div>

                  <div class="contacts_item-link">
                    <FooterLocationsEmail :email="contacts.contacts.pochta" />
                  </div>
                </div>
              </div>

              <div class="contacts_link-box contacts_link-box-hot-line">
                <img src="/images/tel.svg" alt="" class="contacts_item-img" />

                <div class="contacts_item-text">
                  <div class="contacts_link-title">Горячая линия</div>
                  <a
                    :href="`tel:${contacts?.contacts.nomerTelefona}`"
                    class="contacts_item-link hover"
                  >
                    {{ contacts?.contacts.nomerTelefona }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Карта -->
      <FooterLocationsMap
        v-if="
          contacts?.contacts.czentrKarty &&
          contacts?.contacts.koordinatyKarty &&
          contacts?.contacts.koordinatyKartyAdresaVMihajlovske
        "
        :czentr-karty="contacts.contacts.czentrKarty"
        :coords="contacts.contacts.koordinatyKarty"
        :coords-mix="contacts.contacts.koordinatyKartyAdresaVMihajlovske"
      />

      <!-- Подвал -->
      <FooterCopy
        v-if="contacts?.contacts.vkontakte"
        :vk="contacts?.contacts.vkontakte"
        :telegram="contacts?.contacts.telegram"
        :whatsapp="contacts?.contacts.vatsap"
        :instagram="contacts?.contacts.instagram"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.contacts_wrap {
  position: relative;
}
.contacts_bg {
  position: absolute;
  top: -28px;
  right: 0;
  z-index: -1;
}
.contacts_text {
  max-width: 1024px;
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;
  padding: 80px 0 32px 0;
}
.contacts_descr {
  max-width: 700px;
  font-weight: 200;
}

/* Медиа запросы Контакты текст */
@media (max-width: 1360px) {
  .contacts_bg {
    top: 0;
  }
  .contacts_text {
    max-width: 900px;
    font-size: 26px;
    padding: 60px 0 32px 0;
  }
}
@media (max-width: 960px) {
  .contacts_text {
    max-width: 700px;
    font-size: 22px;
    padding: 42px 0 24px 0;
  }
  .contacts_descr {
    max-width: 600px;
    font-size: 18px;
  }
}
@media (max-width: 480px) {
  .contacts_text {
    font-size: 18px;
    padding: 32px 0 18px 0;
  }
  .contacts_descr {
    font-size: 15px;
  }
}
@media (max-width: 380px) {
  .contacts_descr {
    max-width: 300px;
  }
}

/* ============ Контакты плашки ============ */
.contacts_box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 80px 0 60px;
}
.contacts_item {
  background: #fff;
  border: 2px solid #f2f3f3;
  border-radius: 24px;
  padding: 42px;
}
.contacts_item-title {
  font-weight: 400;
  font-size: 26px;
}
.contacts_item-wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.contacts_item-img {
  height: 48px;
}
.contacts_item-link {
  position: relative;
  display: block;
  font-weight: 400;
  font-size: 24px;
  color: #172d2d;
  padding-top: 12px;
  text-decoration: none;
  cursor: pointer;
}
.contacts_item-link.hover {
  border-bottom: 1px solid transparent;
  transition: border var(--transition-speed);
}
.contacts_item-link.hover:hover {
  /* text-decoration: underline; */
  /* text-decoration-skip-ink: none; */
  color: var(--green-akcent);
  border-color: var(--transition-speed);
}
.contacts_item-link.adres {
  cursor: auto;
}
.contacts_item-link.adres:hover {
  text-decoration: none;
}
.contacts_link-box {
  padding-top: 32px;
  display: flex;
  gap: 24px;
}
.contacts_link-title {
  font-weight: 200;
  color: #b9c0c0;
}

.contacts_link-box-hot-line {
  margin-left: 40px;
}

/* Медиа запросы Контакты плашки */
@media (max-width: 1660px) {
  .contacts_box {
    margin: 52px 0 52px;
  }
  .contacts_item-wrap {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .contacts_item-title {
    font-weight: 300;
    line-height: 130%;
  }
  .contacts_link-box-hot-line {
    margin-left: 0;
  }
}
@media (max-width: 960px) {
  .contacts_bg {
    display: none;
  }
  .contacts_box {
    grid-template-columns: 1fr;
    gap: 42px;
  }
  .contacts_item {
    border: none;
    padding: 0;
  }
  .contacts_item-title {
    font-size: 22px;
  }
  .contacts_item-wrap {
    grid-template-columns: repeat(2, 1fr);
  }
  .contacts_item-link {
    padding-top: 10px;
    font-size: 22px;
  }
  .contacts_link-box {
    gap: 20px;
  }
}
@media (max-width: 720px) {
  .contacts_box {
    margin: 42px 0 42px;
    gap: 32px;
  }
  .contacts_item-wrap {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-top: 26px;
  }
  .contacts_item-title {
    font-size: 18px;
  }
  .contacts_item-img {
    width: 38px;
    height: 38px;
  }
  .contacts_item-link {
    font-size: 18px;
    padding-top: 0;
  }
  .contacts_link-title {
    font-size: 15px;
  }
  .contacts_link-box {
    gap: 12px;
    padding-top: 0;
  }
}

/*  */
:deep(.map) {
  max-width: 100%;
}

/*  */
/* :deep(.copy) {
  padding-bottom: 34px;

  @media (max-width: 1280px) {
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media (max-width: 576px) {
    padding-bottom: 20px;
  }
} */
</style>
