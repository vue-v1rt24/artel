<script setup lang="ts">
const { data: dataPartners } = await useFetch('/api/pages/partners');

useSeoMeta({
  title: dataPartners.value?.seo.titleSeo,
  description: dataPartners.value?.seo.descriptionSeo,
});

const interval = ref<ReturnType<typeof setInterval> | null>(null);
const img = useTemplateRef('img');

//
onMounted(() => {
  let idx = 0;

  interval.value = setInterval(() => {
    if (++idx === dataPartners.value?.partners.partnerPatnyoryRepeat.length) {
      idx = 0;
    }

    img.value!.src =
      dataPartners.value!.partners.partnerPatnyoryRepeat[
        idx
      ].partnerPatnyoryRepeatIzobrazhenie.node?.mediaItemUrl;
  }, 1000);
});

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>

<template>
  <div class="partners">
    <UiBreadCrumbs :links="[{ title: 'Партнёры' }]" />

    <!--  -->
    <div class="container">
      <h1 class="h2_72">{{ dataPartners?.partners.partnerZagolovok }}</h1>

      <div class="partners_top">
        <div class="partners_left">
          {{ dataPartners?.partners.partnerOpisanie }}
        </div>

        <div class="partners_right">
          <div class="partners_right-img">
            <img
              v-if="dataPartners?.partners.partnerPatnyoryRepeat.length"
              :src="
                dataPartners.partners.partnerPatnyoryRepeat[0].partnerPatnyoryRepeatIzobrazhenie
                  .node?.mediaItemUrl
              "
              ref="img"
              alt=""
            />
          </div>

          <div class="partners_right-text">
            {{ dataPartners?.partners.partnerObshheeOpisanieDlyaPartnyorov }}
          </div>
        </div>
      </div>

      <div class="partners-subtitle">
        {{ dataPartners?.partners.partnerZagolovokDlyaPartnyorov }}
      </div>

      <div class="partners_wrap">
        <div
          v-for="(partner, idx) in dataPartners?.partners.partnerPatnyoryRepeat"
          :key="idx"
          class="partners_item"
        >
          <img
            :src="partner.partnerPatnyoryRepeatIzobrazhenie.node?.mediaItemUrl"
            alt=""
            class="partners_item-img"
          />

          <div class="partners_item-blur"></div>
          <div class="partners_item-hover">{{ partner.partnerPatnyoryRepeatTekst }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.partners_top {
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  gap: 32px;
}

.partners_left {
  font-weight: 200;
  line-height: 140%;
  max-width: 510px;
}

.partners_right {
  display: flex;
  gap: 46px;
}

.partners_right-img {
  position: relative;
  border-radius: 16px;
  background: #f2f8f6;
  padding: 23px 21px;
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.partners_right-img img {
  position: absolute;
  width: 50px;
}

.partners_right-text {
  font-weight: 200;
  max-width: 480px;
}

.partners-subtitle {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 72px;
  line-height: 100%;
  max-width: 1155px;
}

.partners_wrap {
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.partners_item {
  border-radius: 20px;
  background: #f2f8f6;
  text-align: center;
  position: relative;
  z-index: 1;
  aspect-ratio: 1.3;
}

.partners_item:hover .partners_item-hover {
  display: block;
}

.partners_item:hover .partners_item-blur {
  display: block;
}

.partners_item-img {
  max-width: 100%;
  position: relative;
  transform: translateY(-50%);
  top: 50%;
}

.partners_item-blur {
  backdrop-filter: blur(15px);
  background: rgba(242, 248, 246, 0.01);
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  z-index: 4;
}

.partners_item-hover {
  padding: 16px 18px;
  font-weight: 300;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  border-radius: 12px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  margin-right: 20px;
  z-index: 10;
  display: none;
  width: 270px;
}

/* Медиа запросы Партнеры  */
@media (max-width: 1360px) {
  .partners_top {
    padding: 60px 0;
  }
  .partners-subtitle {
    font-size: 48px;
    max-width: 780px;
  }
  .partners_wrap {
    padding-top: 52px;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1130px) {
  .partners_top {
    padding: 42px 0 100px 0;
    flex-direction: column;
  }
  .partners_left {
    font-size: 18px;
    max-width: 640px;
  }
}

@media (max-width: 960px) {
  .partners_right-text {
    font-size: 18px;
    max-width: 480px;
  }
  .partners-subtitle {
    font-size: 40px;
  }
  .partners_wrap {
    padding-top: 60px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .partners_top {
    padding: 32px 0 60px 0;
    gap: 26px;
  }
  .partners_left {
    font-size: 15px;
  }
  .partners_right {
    flex-direction: column;
    gap: 14px;
  }
  .partners_right-img {
    width: 64px;
    height: 64px;
    padding: 16px 15px;
  }
  .partners_right-img img {
    width: 34px;
  }
  .partners_right-text {
    max-width: 100%;
    font-size: 15px;
    line-height: 140%;
  }
  .partners-subtitle {
    font-size: 22px;
    line-height: 110%;
  }
  .partners_wrap {
    padding-top: 32px;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .partners_item-hover {
    font-size: 14px;
  }
}
</style>
