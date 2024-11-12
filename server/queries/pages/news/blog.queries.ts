// Для вывода на странице "Новости"
export const blogQuery = (nextPage?: string) => `
{
  blogsTypes(first: 6, after: "${nextPage}") {
    nodes {
      databaseId
      date
      slug
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      contentTypeName
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;

// Для получения полной записи блога
export const slugBlogQuery = (slug: string) => {
  return `
    {
      blogTypeBy(slug: "${slug}") {
        databaseId
        date
        title
        content
        seo {
          titleSeo
          descriptionSeo
        }
        newsFields {
          newsKolichestvoProsmotrov
        }
      }
    }
  `;
};

// Получение других записей для вывода в "Читайте другие статьи"
export const otherBlogQuery = (id: number) => {
  return `
    {
      blogsTypes(where: {notIn: "${id}"}, first: 3) {
        nodes {
          databaseId
          date
          slug
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
};
