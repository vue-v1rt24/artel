<script setup lang="ts">
const { topMenu } = useMenus();
const isOpenMenu = useIsOpenMenu();

// Закрытие меню
const closeModalMenu = () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  }
};
</script>

<template>
  <div class="top_header_bx">
    <div class="container">
      <div class="top_header">
        <ul class="top_header__list">
          <li v-for="menu in topMenu" :key="menu.link">
            <NuxtLink :to="menu.link" @click="closeModalMenu">{{ menu.title }}</NuxtLink>
          </li>
        </ul>

        <div class="top_header__tel_email">
          <a @click="copyBuffer" href="#">mail@golden-artel.ru</a>
          <a href="tel:8 (8652) 990-990">8 (8652) 990-990</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.top_header_bx {
  position: relative;
  z-index: 11;
  background-color: var(--green-50);
  padding: 14px 0;

  /*  */
  @media (max-width: 1280px) {
    padding: 12px 0;
  }

  @media (max-width: 1200px) {
    padding: 17px 0;
  }

  @media (max-width: 768px) {
    padding: 18px 0;
  }

  @media (max-width: 576px) {
    padding: 14px 0;
  }
}

/*  */
.top_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*  */
.top_header__list {
  display: flex;
  align-items: center;
  column-gap: 40px;

  /*  */
  @media (max-width: 1280px) {
    column-gap: 32px;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  /*  */
  a {
    font-weight: 300;
    font-size: 17px;
    line-height: 90%;
    color: var(--main-green);
    transition: color var(--transition-speed);

    /*  */
    &.active {
      text-decoration: underline;
    }

    /*  */
    @media (hover: hover) {
      &:hover {
        color: var(--green-akcent);
      }
    }

    /*  */
    @media (max-width: 1366px) {
      font-size: 16px;
    }
  }
}

/*  */
.top_header__tel_email {
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.top_header__tel_email a {
  font-weight: 400;
  font-size: 18px;
  line-height: 90%;
  color: var(--main-green);
  display: inline-block;
  transition: color var(--transition-speed);

  &:nth-child(1) {
    margin-right: 62px;

    /*  */
    @media (max-width: 1200px) {
      margin-right: 0;
    }
  }

  /*  */
  @media (hover: hover) {
    &:hover {
      color: var(--green-akcent);
    }
  }

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
}
</style>
