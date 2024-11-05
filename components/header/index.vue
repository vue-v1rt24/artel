<script setup lang="ts">
const route = useRoute();
const theme = useTheme();
const { menu } = useMenus();
const isOpenMenu = useIsOpenMenu();
const viewport = useViewport();
const modal = useTemplateRef('modal');

// Открытие модального окна с формой
const contactUs = () => {
  modal.value?.modalOpen();
};

// Закрытие меню
const closeModalMenu = () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  }
};

// Отслеживание открытия / закрытия меню
watch(
  () => isOpenMenu.value,
  (isOpenMenu) => {
    if (isOpenMenu) {
      document.body.classList.add('open_menu');
    } else {
      document.body.classList.remove('open_menu');
    }
  },
);
</script>

<template>
  <header :class="['header', { dark: theme === 'dark' }]">
    <HeaderTop />

    <!--  -->
    <div class="container">
      <div class="header_wrap">
        <!--  -->
        <div class="logo">
          <NuxtLink v-if="route.path !== '/'" to="/" @click="closeModalMenu">
            <ImagesLogoHeader />
          </NuxtLink>

          <ImagesLogoHeader v-else />
        </div>

        <!--  -->
        <button
          type="button"
          :class="['btn_catalog', { active: isOpenMenu }]"
          @click="isOpenMenu = !isOpenMenu"
        >
          <span class="btn_catalog__lines"></span>
          <span v-if="viewport.isGreaterOrEquals('screen1200')">Каталог</span>
          <span v-if="viewport.isLessThan('screen1200')">Меню</span>
        </button>

        <!--  -->
        <ul class="menu">
          <li v-for="{ title, link, blank } in menu">
            <NuxtLink :to="link" @click="closeModalMenu" :target="blank ? '_blank' : '_self'">
              {{ title }}
            </NuxtLink>
          </li>
        </ul>

        <!--  -->
        <button type="button" class="contact_us" @click="contactUs">Связаться с нами</button>

        <Teleport to="body">
          <UiModal id-modal="contact-us-header" ref="modal">
            <ModalTemplateShell>
              <ModalTemplateFindAvailability
                form-class="contact-us-form"
                title="Связаться с нами"
                subject="Связаться с нами"
              />
            </ModalTemplateShell>
          </UiModal>
        </Teleport>
      </div>
    </div>

    <!--  -->
    <HeaderModalMenu />
  </header>
</template>

<style lang="css" scoped>
.header {
  position: relative;
}

/*  */
.header_wrap {
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 26px;

  /*  */
  @media (max-width: 576px) {
    padding-top: 14px;
  }
}

/*  */
.logo svg {
  flex-shrink: 0;
  height: auto;

  /*  */
  @media (max-width: 1366px) {
    width: 225px;
  }

  @media (max-width: 576px) {
    width: 150px;
  }
}

/*  */

.btn_catalog {
  width: 171px;
  height: 60px;
  font-family: var(--font-family);
  color: var(--main-green);
  background-color: transparent;
  border: 2px solid var(--main-green);
  border-radius: 16px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  transition: color var(--transition-speed), background-color var(--transition-speed);

  /*  */
  .dark & {
    color: white;
    border-color: white;
  }

  /*  */
  @media (max-width: 1280px) {
    margin: 0 75px 0 62px;
  }

  @media (max-width: 1250px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 1200px) {
    width: 152px;
    margin: 0;
  }

  @media (max-width: 576px) {
    width: 114px;
    height: 44px;
    font-size: 14px;
    column-gap: 10px;
    border-radius: 12px;
  }
}

.btn_catalog:hover {
  background-color: var(--green-50);

  .btn_catalog__lines {
    background-color: var(--main-green);
  }

  .dark & {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .dark &.active {
    background-color: var(--main-green);
  }
}

.btn_catalog.active {
  color: white;
  background-color: var(--main-green);
}

/*  */
.btn_catalog__lines {
  position: relative;
  width: 26px;
  height: 3px;
  background-color: var(--medium-green);
  border-radius: 6px;
  rotate: 0deg;
  transition: background-color var(--transition-speed), rotate var(--transition-speed);

  /*  */
  @media (max-width: 576px) {
    width: 18px;
    height: 2px;
  }
}

.dark .btn_catalog:hover .btn_catalog__lines {
  background-color: white;
}

.btn_catalog.active .btn_catalog__lines {
  background-color: white;
  rotate: 45deg;
}

.btn_catalog__lines::before,
.btn_catalog__lines::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: var(--medium-green);
  display: block;
  border-radius: 6px;

  rotate: 0deg;
  translate: 0;
  opacity: 1;
  transition: background-color var(--transition-speed), rotate var(--transition-speed),
    translate var(--transition-speed), opacity var(--transition-speed);
}

.btn_catalog__lines::before {
  top: -9px;
}

.btn_catalog__lines::after {
  top: 9px;
}

.dark .btn_catalog:hover .btn_catalog__lines::before,
.dark .btn_catalog:hover .btn_catalog__lines::after {
  background-color: white;
}

.btn_catalog.active .btn_catalog__lines::before,
.btn_catalog.active:hover .btn_catalog__lines::before {
  background-color: white;
  rotate: 90deg;
  translate: 0px 9px;
}

.btn_catalog.active .btn_catalog__lines::after {
  opacity: 0;
}

@media (max-width: 576px) {
  .btn_catalog__lines::before {
    top: -6px;
  }

  .btn_catalog__lines::after {
    top: 6px;
  }

  .btn_catalog.active .btn_catalog__lines::before {
    translate: 0px 6px;
  }
}

.btn_catalog:hover .btn_catalog__lines::before,
.btn_catalog:hover .btn_catalog__lines::after {
  background-color: var(--main-green);
}

/*  */

.menu {
  max-width: 730px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /*  */
  @media (max-width: 1200px) {
    display: none;
  }
}

.menu a {
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: var(--main-green);

  /*  */
  .dark & {
    color: white;
  }

  .open_menu .dark & {
    color: var(--main-green);
  }
}

/*  */

.contact_us {
  width: 206px;
  height: 61px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 16px;
  border: none;
  transition: color var(--transition-speed), background-color var(--transition-speed);

  /*  */
  @media (max-width: 1600px) {
    display: none;
  }
}

.contact_us:hover {
  color: white;
  background-color: var(--main-green);
}
</style>
