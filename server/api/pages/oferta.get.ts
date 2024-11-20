import { requestFetch } from '~/server/utils/requestFetch';
import { ofertaQuery } from '~/server/queries/pages/oferta.queries';
import { typePrivacyPolicy } from '~/server/types/pages/privacyPolicy.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<typePrivacyPolicy>(ofertaQuery);

  return {
    seo: data.data.pageBy.seo,
    content: data.data.pageBy.content,
  };
});
