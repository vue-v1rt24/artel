import { requestFetch } from '~/server/utils/requestFetch';
import { newsQuery } from '~/server/queries/pages/news/index.queries';
import { TypeNews } from '~/server/types/pages/news/index.types';

export default defineEventHandler(async (event) => {
  const { pagination } = getQuery(event);

  const data = await requestFetch<TypeNews>(newsQuery(pagination as string));

  return {
    content: data.data.newsTypes.nodes,
    pagination: data.data.newsTypes.pageInfo,
  };
});
