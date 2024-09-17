import { requestFetch } from '../utils/requestFetch';
import { getCatsQuery } from '../queries/getCats.queries';
import { TypeCatsQuery } from '../types/getCatsMenu.types';

export default defineEventHandler(async (event) => {
  const cats = (await requestFetch(getCatsQuery)) as TypeCatsQuery;

  return cats.data.productCategories.nodes;
});
