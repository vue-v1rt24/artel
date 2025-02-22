import { EnumRole } from '../types/telegramBot.types';

export default defineEventHandler(async (event) => {
  const { tokenTelegram, userIdTovaroVed, userIdProdavetc, userIdYouvelir } = useRuntimeConfig();

  const { role, message } = await readBody<{ role: EnumRole; message: string }>(event);

  if (!role || !message) {
    throw createError({
      statusCode: 403,
      message: 'Нет параметра role, message',
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

  const formData = new FormData();
  formData.append('chat_id', idUser);
  formData.append('parse_mode', 'html');
  formData.append('text', message);

  const res = await $fetch(`https://api.telegram.org/bot${tokenTelegram}/sendMessage`, {
    method: 'POST',
    body: formData,
  });

  return res;
});
