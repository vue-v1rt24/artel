<script setup lang="ts">
const { data: indOrder } = await useFetch('/api/pages/getIndividualOrder');

console.log(indOrder.value);

//
useSeoMeta({
  title: indOrder.value?.seo.titleSeo,
  description: indOrder.value?.seo.descriptionSeo,
});
</script>

<template>
  <div>
    <!-- Хлебные крошки -->
    <UiBreadCrumbs dark :links="[{ title: 'Индивидуальный заказ' }]" />

    <!--  -->
    <section class="preview_screen">
      <div class="container">
        <NuxtImg
          :src="indOrder?.previewScreenPage.previewScreenIzobrazhenie.node.mediaItemUrl"
          class="preview_screen__img"
        />

        <div class="preview_screen__text">
          <h1 class="h2_72">{{ indOrder?.previewScreenPage.previewScreenZagolovok }}</h1>
          <p class="p_20">{{ indOrder?.previewScreenPage.previewScreenOpisanie }}</p>
        </div>
      </div>
    </section>

    <!--  -->
    <!-- <section class="order">
      <div class="container">
        <div class="order_wrap">
          <h2 class="order-title">Этапы работы с индивидуальным заказом:</h2>

          <div class="order_right">
            <div class="order_right-box">
              <img src="./images/step-1.webp" alt="" class="order_right-img" />
              <div class="order_right-text">
                <div class="order_right-title">Консультация</div>
                <div class="order_right-descr">
                  Расскажите нашему специалисту о том, какой аксессуар Вы хотите. Обсудим материалы,
                  стиль и характер будущего изделия.
                </div>
              </div>
            </div>

            <div class="order_right-line"></div>

            <div class="order_right-box">
              <img src="./images/step-2.webp" alt="" class="order_right-img" />
              <div class="order_right-text">
                <div class="order_right-title">
                  Предварительная оценка цены и сроков изготовления
                </div>
                <div class="order_right-descr">
                  Собрав всю необходимую информацию, мастера помогут Вам сориентироваться в
                  стоимости и укажут примерное время, которое займет выполнение заказа.
                </div>
              </div>
            </div>

            <div class="order_right-line"></div>

            <div class="order_right-box">
              <img src="./images/step-3.webp" alt="" class="order_right-img" />
              <div class="order_right-text">
                <div class="order_right-title">Разработка дизайна</div>
                <div class="order_right-descr">
                  Мы составляем эскизы, используя предоставленную информацию: описание, фотографии,
                  Ваши собственные наброски.  Далее Вы выбираете один из вариантов, который мы и
                  будем дорабатывать, после чего определяем окончательную цену. 50% от общей
                  стоимости вносится как предоплата.
                </div>
              </div>
            </div>

            <div class="order_right-line"></div>

            <div class="order_right-box">
              <img src="./images/step-4.webp" alt="" class="order_right-img" />
              <div class="order_right-text">
                <div class="order_right-title">Разработка дизайна</div>
                <div class="order_right-descr">
                  Далее мастера сразу же приступят к изготовлению заказа и по прошествии
                  определенного времени Вы получите готовое изделие. Сроки изготовления: от 3-х
                  дней, в зависимости от сложности заказа. Вторая часть оплаты вносится при
                  получении изделия.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="order_bottom">
          <div class="order_bottom-item">
            <img src="./images/garanty.svg" alt="" class="order_bottom-img" />
            <img src="./images/bg.svg" alt="" class="order_bottom-bg" />
            <img src="./images/bg-middle.svg" alt="" class="order_bottom-bg-middle" />
            <img src="./images/bg-mobile.svg" alt="" class="order_bottom-bg-mobile" />
            <div class="order_bottom-title">Гарантия</div>
            <div class="order_bottom-descr">
              Предоставляем гарантию на каждое ювелирное изделие. Качество и подлинность
              подтверждаются гарантийным талоном установленного образца.
            </div>
          </div>

          <div class="order_bottom-item">
            <img src="./images/control.svg" alt="" class="order_bottom-img" />
            <img src="./images/bg.svg" alt="" class="order_bottom-bg" />
            <img src="./images/bg-middle.svg" alt="" class="order_bottom-bg-middle" />
            <img src="./images/bg-mobile.svg" alt="" class="order_bottom-bg-mobile" />
            <div class="order_bottom-title">Контроль качества</div>
            <div class="order_bottom-descr">
              Наши ювелиры с ответственностью и вниманием относятся к качеству материалов, из
              которых изготавливают украшения. Каждое изделие строго проверяется на соответствие
              параметрам той или иной пробы, после чего на него наносится клейма: авторское и
              пробирной палаты.
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style lang="css" scoped>
.preview_screen {
  position: relative;
  height: 630px;
  margin-top: -257px;
  z-index: -1;
}

.preview_screen__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0px -50px;
  z-index: -1;
}

/*  */
.preview_screen__text {
  max-width: 670px;
}

.h2_72 {
  color: white;
  padding-top: 247px;
  margin-bottom: 42px;
}

.p_20 {
  color: white;
}

/*  */
.order {
  padding: 100px 0 150px 0;

  /*  */
  @media (max-width: 1360px) {
    padding: 80px 0 140px 0;
  }

  @media (max-width: 1080px) {
    padding: 60px 0 100px 0;
  }

  @media (max-width: 680px) {
    padding: 40px 0 60px 0;
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
    margin-top: 16px;
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
