import { requestFetch } from '~/server/utils/requestFetch';
import { productQuery } from '~/server/queries/pages/product.queries';
import type { TypeProduct } from '~/server/types/pages/product.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  const data = await requestFetch<TypeProduct>(productQuery(slug));

  return data;
});
