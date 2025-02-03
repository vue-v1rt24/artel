<script setup lang="ts">
//@ts-ignore
import JustValidate from 'just-validate';
import { EnumRole } from '~/server/types/telegramBot.types';

//
const { subject, role } = defineProps<{
  title?: string;
  desc?: string;
  subject: string;
  role: EnumRole;
}>();

//
const mail = useMail();

//
const fields = reactive({
  username: '',
  phone: '',
});

// === Формирование письма
const setMail = () => {
  const message = {
    subject,
    // text: 'Текстовое сообщение',
    html: `
          <div>Имя: <strong>${fields.username}</strong></div>
          <div>Номер телефона: <strong>${fields.phone}</strong></div>
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
  }
};

//
onMounted(() => {
  validator.value = new JustValidate('.form-page', {});

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
      // Отправка письма
      await mail.send(setMail());

      // Отправка в телеграм
      const res = await useTelegram(
        role,
        `<b>Форма:</b> ${subject}\n<b>Имя:</b>: ${fields.username}\n<b>Номер телефона:</b>${fields.phone}`,
      );

      // Сброс формы
      resetForm();

      // Отправка на страницу успешного письма
      navigateTo('/success');
    });
});

//
onUnmounted(() => {
  if (validator.value && validator.value.destroy) {
    validator.value.destroy();
  }
});
</script>

<template>
  <div class="container">
    <form class="form-page">
      <div class="form-page_wrap">
        <img src="/images/forma/form-bg.svg" alt="" class="form-page_bg-dec" />
        <img src="/images/forma/form-bg-mob.svg" alt="" class="form-page_bg-mob" />

        <div v-if="title" class="form-page_left">
          <h3 class="form-page-title">{{ title }}</h3>
          <h3 class="form-page-descr">{{ desc }}</h3>
        </div>

        <div class="form-page_right">
          <div class="form-page_right-wrap">
            <div class="form-page_right-title">Заполните Ваши контактные данные</div>

            <div class="form-page_group">
              <UiInput
                name="username"
                placeholder="Ваше имя"
                bg="white"
                v-model="fields.username"
              />
            </div>

            <div class="form-page_group">
              <UiInput
                name="tel"
                type="tel"
                placeholder="Номер телефона"
                bg="white"
                v-model="fields.phone"
              />
            </div>

            <UiButton
              type="submit"
              width="100%"
              bg="var(--main--sand)"
              title="Оставить заявку"
              text-color="var(--main-green)"
            />

            <div class="form-page_checkbox-wrap">
              <UiCheckbox />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped>
.form-page_checkbox-wrap :deep(.checkbox) {
  background-color: transparent;
  outline: 1px solid var(--medium-green);

  /*  */
  &.just-validate-error-field {
    outline: 1px solid var(--red);
  }
}

.form-page_checkbox-wrap :deep(.checkbox_bx) {
  color: var(--medium-green);
}

/*  */
.form-page_checkbox-wrap {
  margin-top: 20px;
}

/*  */
.form-page .label_group:has(.just-validate-error-field) {
  outline: 2px solid var(--red);
}

/*  */
.form-page {
  margin-top: 150px;
}
.form-page_wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 62px;
  background: #172d2d;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}
.form-page_bg-dec {
  position: absolute;
  left: 0;
  bottom: 0;
}
.form-page_bg-mob {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}
.form-page-title {
  color: #fff;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 56px;
  line-height: 110%;
}
.form-page-descr {
  padding-top: 42px;
  color: #fff;
  font-weight: 200;
  max-width: 465px;
  font-size: 20px;
}
.form-page_right {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.form-page_right-title {
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 24px;
}
.form-page_right-wrap {
  width: 100%;
  max-width: 525px;
  margin: 0 auto;
}

.mobile {
  display: none;
}

/*  */
.form-page_group {
  margin-bottom: 14px;
}

/* ================ медиа запросы Форма ============ */
@media (max-width: 1360px) {
  .form-page {
    margin-top: 140px;
  }
  .form-page-title {
    font-size: 48px;
  }
  .form-page-descr {
    padding-top: 32px;
    max-width: 330px;
  }
  .form-page_right-wrap {
    margin: 0;
    max-width: 100%;
  }
}
@media (max-width: 1080px) {
  .form-page {
    margin-top: 100px;
  }
  .form-page_wrap {
    grid-template-columns: 1fr;
    padding: 42px;
    gap: 32px;
    border-radius: 20px;
  }
  .form-page_bg-dec {
    display: none;
  }
  .form-page_bg-mob {
    width: 100%;
    display: block;
  }
  .form-page-title {
    font-size: 40px;
  }
  .form-page-descr {
    font-size: 16px;
    padding-top: 20px;
  }
  .form-page_right-title {
    font-size: 16px;
    padding-bottom: 20px;
  }

  .desc {
    display: none;
  }
  .mobile {
    display: inline;
  }
}
@media (max-width: 576px) {
  .form-page {
    margin-top: 60px;
  }
  .form-page_wrap {
    padding: 28px;
    gap: 28px;
  }
  .form-page-title {
    font-size: 22px;
  }
  .form-page-descr {
    font-size: 15px;
    padding-top: 16px;
  }
  .form-page_right-title {
    font-size: 14px;
    padding-bottom: 16px;
  }
}
</style>
