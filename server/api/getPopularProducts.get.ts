import { requestFetch } from '../utils/requestFetch';
import { getPopularProductsQueries } from '../queries/getPopularProducts.queries';
import { TypePopularProducts } from '../types/getPopularProducts.types';

export default defineEventHandler(async (event) => {
  const dataQuery = await requestFetch<TypePopularProducts>(getPopularProductsQueries);

  return dataQuery.data.products.nodes.length >= 4 ? dataQuery.data.products.nodes : [];
});
