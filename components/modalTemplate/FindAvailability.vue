<script setup lang="ts">
//@ts-ignore
import JustValidate from 'just-validate';
import { Fancybox } from '@fancyapps/ui';

import type { TypeSpecialOffers } from '~/types/sliderSpecialOffers.types';

const {
  formClass,
  title,
  special,
  btnSubmitTitle = 'Узнать наличие',
} = defineProps<{
  formClass: string;
  title: string;
  special?: TypeSpecialOffers | null;
  btnSubmitTitle?: string;
}>();

//
const mail = useMail();

//
const fields = reactive({
  username: '',
  phone: '',
  linkProduct: '',
});

// === Формирование письма
const setMail = () => {
  const message = {
    subject: title,
    // text: 'Текстовое сообщение',
    html: `
          <div>Имя: <strong>${fields.username}</strong></div>
          <div>Номер телефона: <strong>${fields.phone}</strong></div>
          ${
            fields.linkProduct &&
            `<div>Выбранный товар: <strong>${fields.linkProduct}</strong></div>`
          }
        `,
  };

  //
  return message;
};

//
const validator = ref<JustValidate | null>(null);

//
onMounted(() => {
  validator.value = new JustValidate(`.${formClass}`, {});

  validator.value
    .addField('[name="username"]', [
      {
        rule: 'required',
      },
    ])
    .addField('[name="tel"]', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 18,
      },
    ])
    .addField('[name="checkbox"]', [
      {
        rule: 'required',
      },
    ])
    .onSuccess(async (event: SubmitEvent) => {
      if (special) {
        fields.linkProduct = `<a href="#${special?.slug}">${special?.title}</a>`;
      }

      // Отправка письма
      await mail.send(setMail());

      // Закрытие модального окна
      Fancybox.close();
    });
});

//
onUnmounted(() => {
  if (validator.value && validator.value.destroy) {
    validator.value.destroy();
  }
});

// Сброс формы и валидации
watch(
  () => useIsCloseModal().value,
  (val) => {
    if (val && validator.value && validator.value.refresh) {
      validator.value.form.reset();
      validator.value.refresh();
    }
  },
);
</script>

<template>
  <div class="fa_bx">
    <!-- Заголовок -->
    <div class="fa__title">{{ title }}</div>

    <!-- Блок товара -->
    <div v-if="special" class="fa__product">
      <div class="fa__product_img">
        <NuxtImg
          :src="special.img"
          densities="x1"
          sizes="xs576:102px xs:76px"
          format="avif, webp"
        />
      </div>

      <!--  -->
      <div class="fa__product_info">
        <div class="fa__product_info__title">{{ special.title }}</div>

        <div class="fa__product_info__price">
          <span class="fa__product_info__price_current">{{ priceFormatter(+special.price) }}</span>

          <div v-if="special.isOnSale" class="fa__product_info__price_sale">
            <s class="fa__product_info__price_sale__price">{{
              priceFormatter(+special.regularPrice)
            }}</s>

            <span class="fa__product_info__price_sale__sale"
              >-{{ discountPercentage(+special.regularPrice, +special.salePrice) }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Форма -->
    <form :class="[formClass, 'fa__form']">
      <div class="fa__form_title">Заполните Ваши контактные данные</div>

      <UiInput name="username" placeholder="Ваше имя" v-model="fields.username" />
      <UiInput name="tel" placeholder="Номер телефона" type="tel" v-model="fields.phone" />

      <UiButton width="100%" :title="btnSubmitTitle" type="submit" />

      <UiCheckbox />
    </form>
  </div>
</template>

<style lang="css" scoped>
.fa__title {
  font-weight: 300;
  font-size: 32px;
  line-height: 90%;
  color: var(--main-green);
  margin-bottom: 32px;

  /*  */
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
}

/*  */
.fa__product {
  display: flex;
  align-items: center;
  column-gap: 24px;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 28px;
  margin-bottom: 28px;

  /*  */
  @media (max-width: 768px) {
    padding-bottom: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding-bottom: 18px;
    margin-bottom: 18px;
  }
}

/*  */
.fa__product_img {
  width: 120px;
  height: 120px;
  background: var(--low-green);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  /*  */
  @media (max-width: 576px) {
    width: 89px;
    height: 89px;
  }
}

.fa__product_img img {
  mix-blend-mode: darken;
}

/*  */
.fa__product_info {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 8px;
}

/*  */
.fa__product_info__title {
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  text-wrap: balance;
  color: var(--main-green);
  margin-bottom: 15px;

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 0;
  }
}

/*  */
.fa__product_info__price {
  display: flex;
  align-items: center;
  column-gap: 16px;

  /*  */
  @media (max-width: 768px) {
    column-gap: 14px;
  }

  @media (max-width: 480px) {
    column-gap: 12px;
  }
}

.fa__product_info__price_current {
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: var(--main-green);

  /*  */
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
}

/*  */
.fa__product_info__price_sale {
  display: flex;
  align-items: center;
  column-gap: 16px;

  /*  */
  @media (max-width: 768px) {
    column-gap: 24px;
  }
}

.fa__product_info__price_sale__price {
  font-weight: 300;
  font-size: 18px;
  line-height: 100%;
  color: var(--light-gray2);

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
}

.fa__product_info__price_sale__sale {
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  color: var(--main-green);
  background-color: var(--green-50);
  border-radius: 20px;
  padding: 6px 5px;

  /*  */
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    display: none;
  }
}

/*  */
.fa__form_title {
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: var(--main-green);
  margin-bottom: 24px;

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
}

.fa__form .label_group {
  margin-bottom: 14px;

  /*  */
  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
}

/*  */
.fa__form .label_group:has(.just-validate-error-field) {
  outline: 2px solid var(--red);
}

/*  */
.fa__form .btn {
  margin-top: 6px;

  /*  */
  @media (max-width: 480px) {
    margin-top: 4px;
  }
}

/*  */
:global(.just-validate-error-label) {
  display: none;
}
</style>
