import { requestFetch } from '~/server/utils/requestFetch';
import { subCategory, dataParentQuery } from '~/server/queries/pages/catalog.queries';
import type { TypeSubCategory, TypeDataParentQuery } from '~/server/types/pages/catalog.types';

export default defineEventHandler(async (event) => {
  // Получение слага
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Данные не получены',
    });
  }

  // Получение значения сортировки
  const { sort } = getQuery(event);

  // Получение товаров категории
  const getSubCategory = await requestFetch<TypeSubCategory>(
    subCategory(slug, sort as string | undefined),
  );

  // Получение данных категории (сео, описание)
  const dataParent = await requestFetch<TypeDataParentQuery>(
    dataParentQuery(+getSubCategory.data.productCategory.description),
  );

  //
  return {
    products: getSubCategory.data.products.nodes,
    subCategory: getSubCategory.data.productCategory,
    dataCategory: dataParent.data.catalogPageBy,
  };
});
