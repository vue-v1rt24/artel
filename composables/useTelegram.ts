import { EnumRole } from '~/server/types/telegramBot.types';

export const useTelegram = async (role: EnumRole, message: string) => {
  const res = await $fetch('/api/telegramBot', {
    method: 'POST',
    body: { role, message },
  });

  return res;
};
