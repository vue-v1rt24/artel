import { EnumRole } from '../types/telegramBot.types';

export default defineEventHandler(async (event) => {
  const { tokenTelegram, userIdTovaroVed, userIdProdavetc, userIdYouvelir } = useRuntimeConfig();

  const { role, message } = await readBody<{ role: EnumRole; message: string }>(event);

  if (!role && !message) {
    throw createError({
      statusCode: 403,
      message: 'Нет параметра role и message',
    });
  }

  const idUser =
    role === EnumRole.TOVAROVED
      ? userIdTovaroVed
      : role === EnumRole.PRODAVETC
      ? userIdProdavetc
      : role === EnumRole.YOUVELIR
      ? userIdYouvelir
      : null;

  if (!idUser) {
    throw createError({
      statusCode: 403,
      message: 'Роль не определена',
    });
  }

  const res = await $fetch(
    `https://api.telegram.org/bot${tokenTelegram}/sendMessage?chat_id=${idUser}&parse_mode=html&text=${message}`,
  );

  return res;
});
