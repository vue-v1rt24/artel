import { requestFetch } from '~/server/utils/requestFetch';
import { videoQuery } from '~/server/queries/pages/news/video.queries';
import type { TypesVideo } from '~/server/types/pages/news/video.types';

export default defineEventHandler(async (event) => {
  const { pagination } = getQuery(event);

  const data = await requestFetch<TypesVideo>(videoQuery(pagination as string));

  return {
    content: data.data.videoTypes.nodes,
    pagination: data.data.videoTypes.pageInfo,
  };
});
