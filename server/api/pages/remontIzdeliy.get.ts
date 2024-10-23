import { requestFetch } from '~/server/utils/requestFetch';
import { remontIzdeliyQuery } from '~/server/queries/pages/remontIzdeliy.queries';
import { TypeRemontIzdeliy } from '~/server/types/pages/remontIzdeliy.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeRemontIzdeliy>(remontIzdeliyQuery);

  return {
    seo: data.data.pageBy.seo,
    previewScreenPage: data.data.pageBy.previewScreenPage,
    remontIzdelii: data.data.pageBy.remontIzdelii,
  };
});
