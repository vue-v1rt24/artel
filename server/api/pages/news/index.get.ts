import { requestFetch } from '~/server/utils/requestFetch';
import { newsQuery } from '~/server/queries/pages/news/news.queries';
import { TypeNews } from '~/server/types/pages/news/news.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeNews>(newsQuery);

  return {
    content: data.data.newsTypes.nodes,
    pagination: data.data.newsTypes.pageInfo,
  };
});
