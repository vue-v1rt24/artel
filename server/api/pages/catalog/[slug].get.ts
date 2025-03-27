import { requestFetch } from '~/server/utils/requestFetch';

import { catalogChildrenQuery, dataParentQuery } from '~/server/queries/pages/catalog.queries';

import type { TypeChildrenCatalog, TypeDataParentQuery } from '~/server/types/pages/catalog.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  const dataChildrenCatalog = await requestFetch<TypeChildrenCatalog>(catalogChildrenQuery(slug));

  const dataParent = await requestFetch<TypeDataParentQuery>(
    dataParentQuery(+dataChildrenCatalog.data.productCategory.description),
  );

  //
  return {
    childrenCategories: dataChildrenCatalog.data.productCategory.children.nodes,
    dataParentCategory: dataParent.data.catalogPageBy,
  };
});
