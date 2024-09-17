<script setup lang="ts"></script>

<template>
  <div class="top_header_bx">
    <div class="container">
      <div class="top_header">
        <ul class="top_header__list">
          <li>
            <NuxtLink to="/news">Новости</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stocks">Акции</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/reviews">Отзывы и благодарности</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/partners">Партнеры</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts">Контакты</NuxtLink>
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
  z-index: 10;
  background-color: var(--green-50);
  padding: 20px 0;
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

  a {
    font-weight: 300;
    font-size: 17px;
    line-height: 90%;
    color: var(--main-green);
  }
}

/*  */
.top_header__tel_email a {
  font-weight: 400;
  font-size: 18px;
  line-height: 90%;
  color: var(--main-green);
  display: inline-block;

  &:nth-child(1) {
    margin-right: 62px;
  }
}
</style>
