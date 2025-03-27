import { requestFetch } from '~/server/utils/requestFetch';
import { slugNewsQuery, otherNewsQuery } from '~/server/queries/pages/news/slug-news.queries';
import { TypeSlugNews, TypeOtherArticle } from '~/server/types/pages/news/slug-news.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  const data = await requestFetch<TypeSlugNews>(slugNewsQuery(slug as string));

  const otherNews = await requestFetch<TypeOtherArticle>(
    otherNewsQuery(data.data.newsTypeBy.databaseId),
  );

  return {
    singleNews: data.data.newsTypeBy,
    otherNews: otherNews.data.newsTypes?.nodes || [],
  };
});
