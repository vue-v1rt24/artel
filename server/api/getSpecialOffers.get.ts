import { TypeProductOrder } from '~/types/productOrder.types';

const isTypeSpecialOffers = (data: TypeProductOrder[]): data is TypeProductOrder[] => {
  return typeof data[0].id === 'number';
};

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  let res: TypeProductOrder[] | undefined;

  const data = await $fetch<string>(`${apiUrl}/artel/special-offers`);

  if (data) {
    res = JSON.parse(data);

    if (res && isTypeSpecialOffers(res)) {
      return res;
    }
  }

  return res;
});
