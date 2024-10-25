import { requestFetch } from '~/server/utils/requestFetch';
import { reviewsQuery } from '~/server/queries/pages/reviews.queries';
import { TypeReviews } from '~/server/types/pages/reviews.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeReviews>(reviewsQuery);

  return {
    reviews: data.data.reviewsTypes.nodes,
  };
});
