import { requestFetch } from '~/server/utils/requestFetch';
import { slugNewsQuery } from '~/server/queries/pages/news/slug-news.queries';
import { TypeSlugNews } from '~/server/types/pages/news/slug-news.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');
  console.log(slug);

  const data = await requestFetch<TypeSlugNews>(slugNewsQuery(slug as string));

  return data.data.newsTypeBy;
});
