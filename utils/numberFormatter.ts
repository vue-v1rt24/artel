const PRICE_FORMATTER = new Intl.NumberFormat('ru-RU', {
  currency: 'rub',
  style: 'currency',
  maximumFractionDigits: 0,
});

export const priceFormatter = (num: number) => {
  return PRICE_FORMATTER.format(num);
};
