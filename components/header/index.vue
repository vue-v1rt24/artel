<script setup lang="ts">
const route = useRoute();
const btnActive = ref(false);

const { data: catsStock, error } = await useFetch('/api/getCats');

if (error.value) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Категории не найдены',
  });
}

console.log(catsStock.value);
</script>

<template>
  <header class="header">
    <HeaderTop />

    <div class="container">
      <div class="header_wrap">
        <!--  -->
        <div class="logo">
          <NuxtLink to="/" v-if="route.path !== '/'">
            <img src="/images/logo.svg" alt="" />
          </NuxtLink>

          <img v-else src="/images/logo.svg" alt="" />
        </div>

        <!--  -->
        <button
          type="button"
          :class="['btn_catalog', { active: btnActive }]"
          @click="btnActive = !btnActive"
        >
          <span class="btn_catalog__lines"></span>
          <span>Каталог</span>
        </button>

        <!--  -->
        <ul class="menu">
          <li>
            <NuxtLink to="/about">О компании</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/individual-order">Индивидуальный заказ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/remont-izdeliy">Ремонт изделий</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lombard">Ломбард</NuxtLink>
          </li>
        </ul>

        <!--  -->
        <button type="button" class="contact_us">Связаться с нами</button>
      </div>
    </div>

    <!--  -->
    <HeaderModalMenu
      v-if="catsStock?.cats?.length"
      :cats="catsStock.cats"
      :stock="catsStock.stock"
      :is-visible="btnActive"
    />
  </header>
</template>

<style lang="css" scoped>
.header {
  position: relative;
}

/*  */
.header_wrap {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  transition: color var(--transition-speed), background-color var(--transition-speed);
}

.btn_catalog:hover {
  background-color: var(--green-50);
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
  rotate: 0;
  transition: rotate var(--transition-speed);
}

.btn_catalog.active .btn_catalog__lines {
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

  rotate: 0;
  translate: 0;
  opacity: 1;
  transition: rotate var(--transition-speed), translate var(--transition-speed),
    opacity var(--transition-speed);
}

.btn_catalog__lines::before {
  top: -6px;
}

.btn_catalog__lines::after {
  top: 6px;
}

.btn_catalog.active .btn_catalog__lines::before {
  rotate: 90deg;
  translate: 0px 7px;
}

.btn_catalog.active .btn_catalog__lines::after {
  opacity: 0;
}

/*  */

.menu {
  max-width: 730px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu a {
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: var(--main-green);
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
}

.contact_us:hover {
  color: white;
  background-color: var(--main-green);
}
</style>
