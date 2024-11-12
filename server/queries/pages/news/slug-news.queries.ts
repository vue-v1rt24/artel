export const slugNewsQuery = (slug: string) => {
  return `
    {
      newsTypeBy(slug: "${slug}") {
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

// Получение других статей для вывода в "Читайте другие статьи"
export const otherNewsQuery = (id: number) => {
  return `
    {
      newsTypes(where: {notIn: "${id}"}, first: 3) {
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
