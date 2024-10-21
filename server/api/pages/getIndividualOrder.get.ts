import { requestFetch } from '~/server/utils/requestFetch';
import { individualOrderQuery } from '~/server/queries/pages/individualOrder.queries';
import { TypeIndividualOrder } from '~/server/types/pages/individualOrder.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeIndividualOrder>(individualOrderQuery);

  return {
    seo: data.data.pageBy.seo,
    previewScreenPage: data.data.pageBy.previewScreenPage,
  };
});
