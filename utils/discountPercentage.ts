export const discountPercentage = (regular_price: number, sale_price: number) => {
  return Math.round(((regular_price - sale_price) / regular_price) * 100) + '%';
};
