const PRICE_FORMATTER = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export const dateFormatter = (date: string) => {
  return PRICE_FORMATTER.format(new Date(date));
};
