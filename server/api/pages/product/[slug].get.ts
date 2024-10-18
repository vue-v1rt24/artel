import { requestFetch } from '~/server/utils/requestFetch';
import { productQuery } from '~/server/queries/pages/product.queries';
import type { TypeProduct } from '~/server/types/pages/product.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  // Запрос
  const data = await requestFetch<TypeProduct>(productQuery(slug));

  // Делаем нужную очерёдность категорий: Родительская категория -> Подкатегория:

  // Родительская категория
  const cat1 = data.data.product.productCategories.nodes.find(
    (item) => item.slug === 'serebro' || item.slug === 'zoloto',
  );

  // Подкатегория
  let cat2 = null;

  if (cat1?.slug === 'serebro') {
    cat2 = data.data.product.productCategories.nodes.find((item) => item.slug !== 'serebro');
  } else {
    cat2 = data.data.product.productCategories.nodes.find((item) => item.slug !== 'zoloto');
  }

  //
  return { ...data.data.product, productCategories: [cat1, cat2] };
});
