import { requestFetch } from '~/server/utils/requestFetch';
import { blogQuery } from '~/server/queries/pages/news/blog.queries';
import { TypeBlog } from '~/server/types/pages/news/blog.types';

export default defineEventHandler(async (event) => {
  const { pagination } = getQuery(event);

  const data = await requestFetch<TypeBlog>(blogQuery(pagination as string));

  return {
    content: data.data.blogsTypes.nodes,
    pagination: data.data.blogsTypes.pageInfo,
  };
});
