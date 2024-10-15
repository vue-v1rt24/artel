import { requestFetch } from '~/server/utils/requestFetch';

import { subCategory } from '~/server/queries/pages/catalog.queries';

import type { TypeSubCategory } from '~/server/types/pages/catalog.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Данные не получены',
    });
  }

  const getSubCategory = await requestFetch<TypeSubCategory>(subCategory(slug));

  //
  return {
    products: getSubCategory.data.products.nodes,
    subCategoryName: getSubCategory.data.productCategory.name,
  };
});
