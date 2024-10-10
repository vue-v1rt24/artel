<script setup lang="ts">
import '~/assets/css/return-styles-wp.css';

defineProps<{
  data: string;
}>();
</script>

<template>
  <div class="lombard_modal wp_content" v-html="data"></div>

  <UiButton
    width="460px"
    height="91px"
    title="Перейти на сайт"
    bg="var(--green-50)"
    text-color="var(--main-green)"
    class="lombard_modal__btn"
    @btn-click="$router.push('/')"
  />
</template>

<style>
.lombard_modal h2 {
  font-weight: 300;
  font-size: 32px;
  line-height: 120%;

  /*  */
  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
}

.lombard_modal h3 {
  font-weight: 500;
  font-size: 26px;
  line-height: 120%;
  margin: 24px 0 38px 0;

  /*  */
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 22px 0 32px 0;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    margin: 16px 0 24px 0;
  }
}

.lombard_modal h4 {
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 24px;

  /*  */
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 18px;
  }
}

.lombard_modal h5 {
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  /*  */
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.lombard_modal p {
  font-weight: 200;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 26px;

  /*  */
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
}

/*  */
.lombard_modal ul {
  margin-top: 24px;
  margin-bottom: 32px;

  /*  */
  @media (max-width: 576px) {
    margin-top: 18px;
    margin-bottom: 24px;
  }
}

.lombard_modal li {
  position: relative;
  list-style: none;
  font-weight: 200;
  font-size: 18px;
  line-height: 140%;
  padding-left: 32px;
  margin-bottom: 14px;

  /*  */
  &:has(> img) {
    padding-left: 46px;
    margin-bottom: 20px;
  }

  img {
    position: absolute;
    top: -3px;
    left: 0;
  }

  /*  */
  @media (max-width: 576px) {
    font-size: 14px;
    padding-left: 22px;
  }
}

.lombard_modal li:not(:has(img))::before {
  content: '—';
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--gray-text);
}

/*  */
.lombard_modal__btn.btn {
  margin-top: 24px;

  /*  */
  @media (max-width: 768px) {
    margin-top: 32px;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-top: 18px;
  }
}
</style>
