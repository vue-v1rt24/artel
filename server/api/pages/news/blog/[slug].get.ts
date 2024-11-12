import { requestFetch } from '~/server/utils/requestFetch';
import { slugBlogQuery, otherBlogQuery } from '~/server/queries/pages/news/blog.queries';
import type { TypeSlugBlog, TypeOtherArticle } from '~/server/types/pages/news/blog.types';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  const data = await requestFetch<TypeSlugBlog>(slugBlogQuery(slug as string));

  // Получение других записей блога для раздела "Читайте другие статьи"
  const otherBlog = await requestFetch<TypeOtherArticle>(
    otherBlogQuery(data.data.blogTypeBy.databaseId),
  );

  return {
    singleBlog: data.data.blogTypeBy,
    otherBlog: otherBlog.data.blogsTypes?.nodes || [],
  };
});
