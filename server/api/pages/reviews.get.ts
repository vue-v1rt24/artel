import { requestFetch } from '~/server/utils/requestFetch';
import { reviewsQuery } from '~/server/queries/pages/reviews.queries';
import { TypeReviews } from '~/server/types/pages/reviews.types';

export default defineEventHandler(async (event) => {
  // Получение параметра следующей страницы
  const { nextPage } = getQuery(event);

  // Запрос
  const data = await requestFetch<TypeReviews>(reviewsQuery(nextPage as string));

  return {
    reviews: data.data.reviewsTypes.nodes,
    pagination: data.data.reviewsTypes.pageInfo,
  };
});
