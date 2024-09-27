import { TypeSpecialOffers } from '../types/sliderSpecialOffers.types';

const isTypeSpecialOffers = (data: TypeSpecialOffers[]): data is TypeSpecialOffers[] => {
  return typeof data[0].id === 'number';
};

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  let res: TypeSpecialOffers[] | undefined;

  const data = await $fetch<string>(`${apiUrl}/artel/special-offers`);

  if (data) {
    res = JSON.parse(data);

    if (res && isTypeSpecialOffers(res)) {
      return res;
    }
  }

  return res;
});
