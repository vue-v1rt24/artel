<script setup lang="ts">
//@ts-ignore
import JustValidate from 'just-validate';
import { Fancybox } from '@fancyapps/ui';

import type { TypeProductOrder } from '~/types/productOrder.types';
import type { EnumRole } from '~/server/types/telegramBot.types';

//
const { siteUrlFrontend } = useRuntimeConfig().public;

//
const {
  formClass,
  title,
  subject,
  role,
  special,
  btnSubmitTitle = 'Узнать наличие',
} = defineProps<{
  formClass: string;
  title: string;
  subject: string;
  role: EnumRole;
  special?: TypeProductOrder | null;
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
    subject,
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

// Сброс формы
const resetForm = () => {
  if (validator.value && validator.value.refresh) {
    validator.value.form.reset();
    validator.value.refresh();
    fields.username = fields.phone = fields.linkProduct = '';
  }
};

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
      let linkProductTelegram: string | null = '';

      if (special) {
        fields.linkProduct = `<a href="${location.protocol}/${location.host}/product/${special.slug}">${special.title}</a>`;
        // linkProductTelegram = `\n<a href="https://golden-artel.ru/product/${special.slug}">Ссылка на товар</a>`;
        linkProductTelegram = `\n<a href="${siteUrlFrontend}/product/${special.slug}">Ссылка на товар</a>`;
      }

      // Отправка письма
      // await mail.send(setMail());

      // Отправка в телеграм
      const res = await useTelegram(
        role,
        `<b>Форма:</b> ${subject}\n<b>Имя:</b>: ${fields.username}\n<b>Номер телефона:</b>${
          fields.phone
        }${
          fields.linkProduct && `\n<b>Выбранный товар:</b> ${fields.linkProduct}`
        }${linkProductTelegram}`,
      );

      //
      Fancybox.close();

      // Сброс формы
      resetForm();

      // Отправка на страницу успешного письма
      navigateTo('/success', { external: true });
    });
});

//
onUnmounted(() => {
  if (validator.value && validator.value.destroy) {
    validator.value.destroy();
  }

  if (Fancybox.destroy) {
    Fancybox.destroy();
  }
});

// Сброс формы и валидации
watch(
  () => useIsCloseModal().value,
  (val) => {
    if (val) {
      resetForm();
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
          sizes="s576:102px s:76px"
          format="avif, webp"
          loading="lazy"
          alt=""
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
  line-height: 120%;
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
  flex-shrink: 0;
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
  flex-direction: column;
  row-gap: 8px;

  /*  */
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
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
