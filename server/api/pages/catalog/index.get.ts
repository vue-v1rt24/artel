import { requestFetch } from '~/server/utils/requestFetch';
import { catalogParentQuery } from '~/server/queries/pages/catalog.queries';
import type { TypeParentCatalog } from '~/server/types/pages/catalog.types';

export default defineEventHandler(async (event) => {
  // Получение родительских категорий (каталогов)
  const dataParentCatalog = await requestFetch<TypeParentCatalog>(catalogParentQuery);
  console.log(100);

  //
  return dataParentCatalog.data.productCategories.nodes;
});
