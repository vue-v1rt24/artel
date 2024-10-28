import { requestFetch } from '~/server/utils/requestFetch';
import { stockQuery } from '~/server/queries/pages/stocks.queries';
import { TypeStock } from '~/server/types/pages/stocks.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  const data = await requestFetch<TypeStock>(stockQuery(slug));

  return {
    seo: data.data.stockBy.seo,
    stock: data.data.stockBy.stocksFields,
  };
});
