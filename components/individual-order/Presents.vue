<script setup lang="ts">
defineProps<{
  presents: {
    individualOrderPredostavlyaemVariantyRepeatIzobrazhenie: {
      node: {
        mediaItemUrl: string;
      };
    };
    individualOrderPredostavlyaemVariantyRepeatOpisanie: string;
    individualOrderPredostavlyaemVariantyRepeatZagolovok: string;
  }[];
}>();
</script>

<template>
  <div class="order_bottom">
    <div
      v-for="pres in presents"
      :key="pres.individualOrderPredostavlyaemVariantyRepeatZagolovok"
      class="order_bottom-item"
    >
      <!-- <NuxtImg
        :src="pres.individualOrderPredostavlyaemVariantyRepeatIzobrazhenie.node?.mediaItemUrl"
        format="avif, webp"
        densities="x1"
        class="order_bottom-img"
        alt=""
      /> -->
      <img
        class="order_bottom-img"
        :src="pres.individualOrderPredostavlyaemVariantyRepeatIzobrazhenie.node?.mediaItemUrl"
        loading="lazy"
        alt=""
      />

      <img src="/public/images/individualOrder/bg.svg" alt="" class="order_bottom-bg" />

      <img
        src="/public/images/individualOrder/bg-middle.svg"
        alt=""
        class="order_bottom-bg-middle"
      />

      <img
        src="/public/images/individualOrder/bg-mobile.svg"
        alt=""
        class="order_bottom-bg-mobile"
      />

      <div class="order_bottom-title">
        {{ pres.individualOrderPredostavlyaemVariantyRepeatZagolovok }}
      </div>

      <div class="order_bottom-descr">
        {{ pres.individualOrderPredostavlyaemVariantyRepeatOpisanie }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.order_bottom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 150px;

  /*  */
  @media (max-width: 1360px) {
    margin-top: 140px;
  }

  @media (max-width: 1080px) {
    margin-top: 100px;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 680px) {
    margin-top: 60px;
  }

  @media (max-width: 576px) {
    gap: 20px;
  }
}

.order_bottom-item {
  position: relative;
  border-radius: 20px;
  background: #f2f8f6;
  padding: 62px;
  overflow: hidden;

  /*  */
  @media (max-width: 1360px) {
    padding: 52px;
  }

  @media (max-width: 1080px) {
    padding: 42px;
  }

  @media (max-width: 680px) {
    padding: 28px;
  }
}

.order_bottom-img {
  @media (max-width: 1360px) {
    width: 90px;
  }

  @media (max-width: 1080px) {
    width: 70px;
  }

  @media (max-width: 680px) {
    width: 52px;
  }
}

.order_bottom-title {
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;
  padding-top: 42px;

  /*  */
  @media (max-width: 1360px) {
    font-size: 26px;
  }

  @media (max-width: 1080px) {
    padding-top: 32px;
    font-size: 22px;
  }

  @media (max-width: 680px) {
    font-size: 18px;
    padding-top: 24px;
  }
}

.order_bottom-descr {
  font-weight: 200;
  padding-top: 32px;

  /*  */
  @media (max-width: 1360px) {
    padding-right: 26px;
  }

  @media (max-width: 1080px) {
    padding-top: 20px;
    font-size: 16px;
  }

  @media (max-width: 680px) {
    padding-top: 14px;
    font-size: 15px;
  }
}

.order_bottom-bg {
  position: absolute;
  top: 0;
  right: 0;

  /*  */
  @media (max-width: 1080px) {
    display: none;
  }
}

.order_bottom-bg-middle {
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  /*  */
  @media (max-width: 1080px) {
    display: block;
  }

  @media (max-width: 680px) {
    display: none;
  }
}

.order_bottom-bg-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;

  /*  */
  @media (max-width: 680px) {
    display: block;
  }
}
</style>
