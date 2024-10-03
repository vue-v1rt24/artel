import { TypeOffSLider } from '../types/getImageOffSite.types';

const isTypeOffSLider = (data: TypeOffSLider): data is TypeOffSLider => {
  return typeof data[0].id === 'number';
};

export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  let res: TypeOffSLider | undefined;

  const data = await $fetch<string>(`${apiUrl}/artel/off-site`);

  if (data) {
    res = JSON.parse(data);

    if (res && isTypeOffSLider(res)) {
      return res;
    }
  }

  return res;
});
