<script setup lang="ts">
defineProps<{
  stav: string;
  mix: string;
  email: string;
  phone: string;
}>();
</script>

<template>
  <div class="contacts">
    <div class="h2_56">Контакты</div>
    <p class="contacts__desc">Официальные магазины сети находятся по адресам:</p>

    <ul class="contacts__list">
      <li class="contacts__title__tem" style="--contact-url: url(/images/location.svg)">
        <div class="contacts__title">г. Ставрополь</div>
        <div class="contacts__addr">{{ stav }}</div>
      </li>

      <li class="contacts__title__tem" style="--contact-url: url(/images/location.svg)">
        <div class="contacts__title">г. Михайловск</div>
        <div class="contacts__addr">{{ mix }}</div>
      </li>

      <li class="contacts__title__tem" style="--contact-url: url(/images/email.svg)">
        <div class="contacts__title">Электронный адрес</div>
        <div class="contacts__addr">
          {{ email }}

          <div class="contacts__copy">
            <UiCopyBtn :email="email" />
          </div>
        </div>
      </li>

      <li class="contacts__title__tem" style="--contact-url: url(/images/tel.svg)">
        <div class="contacts__title">Горячая линия</div>

        <div class="contacts__addr">
          <a :href="`tel:{{ phone }}`">{{ phone }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.contacts {
  position: relative;
}

/*  */
.contacts::before {
  content: '';
  position: absolute;
  top: -116px;
  right: -36px;
  width: 694px;
  height: 648px;
  background-image: url(/images/footer-decore.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
}

@media (max-width: 1280px) {
  .contacts::before {
    top: -55px;
    right: 226px;
    width: 497px;
    height: 625px;
  }
}

@media (max-width: 1200px) {
  .contacts::before {
    right: 10%;
  }
}

@media (max-width: 1024px) {
  .contacts::before {
    right: 0;
    width: 350px;
    height: 440px;
  }
}

@media (max-width: 768px) {
  .contacts::before {
    top: 0;
  }
}

@media (max-width: 576px) {
  .contacts::before {
    top: -43px;
    width: 203px;
    height: 255px;
  }
}

/*  */
.contacts__desc {
  max-width: 400px;
  font-weight: 400;
  font-size: 26px;
  line-height: 140%;
  color: var(--main-green);
  margin: 60px 0 42px 0;

  /*  */
  @media (max-width: 1280px) {
    margin: 50px 0 42px 0;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 42px 0 36px 0;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    margin: 32px 0 26px 0;
  }
}

/*  */
.contacts__list {
  width: 740px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 52px 80px;

  /*  */
  @media (max-width: 1280px) {
    width: 796px;
    gap: 52px 136px;
  }

  @media (max-width: 880px) {
    width: 100%;
    gap: 42px 10px;
  }

  @media (max-width: 576px) {
    gap: 24px 10px;
  }
}

.contacts__title__tem {
  position: relative;
  width: 330px;
  padding-left: 70px;

  /*  */
  @media (max-width: 576px) {
    padding-left: 52px;
  }
}

/*  */
.contacts__copy {
  position: absolute;
  bottom: 0px;
  right: -32px;

  /*  */
  @media (max-width: 768px) {
    right: -10px;
  }

  @media (max-width: 576px) {
    bottom: -3px;
    right: 50px;
  }

  @media (max-width: 370px) {
    right: 40px;
  }
}

/*  */
.contacts__title__tem::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  background-image: var(--contact-url);
  background-size: 100%;
  background-repeat: no-repeat;
}

@media (max-width: 576px) {
  .contacts__title__tem::before {
    width: 38px;
    height: 38px;
  }
}

/*  */
.contacts__title {
  font-weight: 200;
  font-size: 20px;
  line-height: 140%;
  color: var(--gray-text);
  margin-bottom: 10px;

  /*  */
  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 4px;
  }
}

.contacts__addr {
  width: fit-content;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  border-bottom: 1px solid transparent;
  transition: border var(--transition-speed);

  /*  */
  &:hover {
    color: var(--green-akcent);
    border-color: var(--transition-speed);
  }

  /*  */
  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
}

/*  */
.contacts a {
  color: inherit;
}
</style>
