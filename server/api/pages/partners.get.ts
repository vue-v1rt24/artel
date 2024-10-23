import { requestFetch } from '~/server/utils/requestFetch';
import { partnersQuery } from '~/server/queries/pages/partners.queries';
import { TypePartners } from '~/server/types/pages/partners.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypePartners>(partnersQuery);

  return {
    seo: data.data.pageBy.seo,
    partners: data.data.pageBy.partners,
  };
});
