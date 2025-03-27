import { requestFetch } from '~/server/utils/requestFetch';
import { productQuery } from '~/server/queries/pages/product.queries';
import type { TypeProduct } from '~/server/types/pages/product.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')!;

  const data = await requestFetch<TypeProduct>(productQuery(slug));

  const cat1 = data.data.product.productCategories.nodes.find(
    (item) => item.slug === 'serebro' || item.slug === 'zoloto',
  );

  let cat2 = null;

  if (cat1?.slug === 'serebro') {
    cat2 = data.data.product.productCategories.nodes.find((item) => item.slug !== 'serebro');
  } else {
    cat2 = data.data.product.productCategories.nodes.find((item) => item.slug !== 'zoloto');
  }

  //
  return { ...data.data.product, productCategories: [cat1, cat2] };
});
