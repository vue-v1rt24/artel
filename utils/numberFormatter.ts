const NUMBER_FORMATTER = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
  maximumFractionDigits: 0,
});

export const numberFormatter = (num: number) => {
  return NUMBER_FORMATTER.format(num);
};
