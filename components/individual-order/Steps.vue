<script setup lang="ts">
defineProps<{
  staps: {
    individualOrderEtapyRabotyVariantyRepeatIzobrazhenie: {
      node: {
        mediaItemUrl: string;
      };
    };
    individualOrderEtapyRabotyVariantyRepeatOpisanie: string;
    individualOrderEtapyRabotyVariantyRepeatZagolovok: string;
  }[];
}>();
</script>

<template>
  <div class="order_wrap">
    <h2 class="order-title">Этапы работы с индивидуальным заказом:</h2>

    <div class="order_right">
      <template
        v-for="(step, idx) in staps"
        :key="step.individualOrderEtapyRabotyVariantyRepeatZagolovok"
      >
        <div v-if="idx > 0" class="order_right-line"></div>

        <div class="order_right-box">
          <img
            class="order_right-img"
            :src="step.individualOrderEtapyRabotyVariantyRepeatIzobrazhenie.node?.mediaItemUrl"
            loading="lazy"
            alt=""
          />

          <div class="order_right-text">
            <div class="order_right-title">
              {{ step.individualOrderEtapyRabotyVariantyRepeatZagolovok }}
            </div>

            <div class="order_right-descr">
              {{ step.individualOrderEtapyRabotyVariantyRepeatOpisanie }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="css" scoped>
.order_wrap {
  display: flex;
  justify-content: space-between;
  gap: 40px;

  /*  */
  @media (max-width: 1360px) {
    flex-direction: column;
    gap: 52px;
  }

  @media (max-width: 680px) {
    gap: 32px;
  }
}

.order_right {
  max-width: 920px;

  /*  */
  @media (max-width: 1360px) {
    max-width: 100%;
  }
}

.order_right-box {
  display: flex;
  gap: 50px;

  /*  */
  @media (max-width: 1080px) {
    gap: 34px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 24px;
  }
}

.order_right-img {
  width: 222px;
  height: 158px;
  border-radius: 20px;

  /*  */
  @media (max-width: 1080px) {
    width: 180px;
    height: 128px;
    border-radius: 16px;
  }

  @media (max-width: 680px) {
    width: 150px;
    height: 106px;
    border-radius: 12px;
  }
}

.order-title {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 110%;
  max-width: 460px;

  /*  */
  @media (max-width: 1360px) {
    font-size: 48px;
    max-width: 740px;
  }

  @media (max-width: 1080px) {
    font-size: 40px;
  }

  @media (max-width: 680px) {
    font-size: 22px;
  }
}

.order_right-title {
  font-weight: 300;
  font-size: 32px;
  line-height: 130%;

  /*  */
  @media (max-width: 1080px) {
    font-size: 22px;
  }

  @media (max-width: 680px) {
    font-size: 18px;
  }
}

.order_right-descr {
  font-weight: 200;
  padding-top: 26px;

  /*  */
  @media (max-width: 1080px) {
    padding-top: 20px;
    font-size: 16px;
  }

  @media (max-width: 680px) {
    padding-top: 16px;
    font-size: 15px;
  }
}

.order_right-line {
  border: 1px solid #e4e6e6;
  width: 100%;
  height: 0px;
  margin: 80px 0;

  /*  */
  @media (max-width: 1360px) {
    margin: 62px 0;
  }

  @media (max-width: 1080px) {
    margin: 32px 0;
  }
}
</style>
