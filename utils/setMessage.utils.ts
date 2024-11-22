import { useMessage } from '~/composables/useLocalStorages';

export const setMessage = (message: string, time: number = 3000) => {
  let setIntervalId: ReturnType<typeof setTimeout> | null = null;

  if (setIntervalId) {
    clearTimeout(setIntervalId);
    setIntervalId = null;
  }

  useMessage().value = message;

  setIntervalId = setTimeout(() => (useMessage().value = null), time);
};
