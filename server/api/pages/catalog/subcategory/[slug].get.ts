import { requestFetch } from '~/server/utils/requestFetch';
import { subCategory, dataParentQuery } from '~/server/queries/pages/catalog.queries';
import type { TypeSubCategory, TypeDataParentQuery } from '~/server/types/pages/catalog.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  const { sort, nextPage } = getQuery(event);

  const getSubCategory = await requestFetch<TypeSubCategory>(
    subCategory(slug, sort as string | undefined, nextPage as string),
  );

  const dataParent = await requestFetch<TypeDataParentQuery>(
    dataParentQuery(+getSubCategory.data.productCategory.description),
  );

  //
  return {
    products: getSubCategory.data.products.nodes,
    subCategory: getSubCategory.data.productCategory,
    dataCategory: dataParent.data.catalogPageBy,
    pageInfo: getSubCategory.data.products.pageInfo,
  };
});
