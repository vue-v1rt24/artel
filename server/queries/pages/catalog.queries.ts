// Получение родительских категорий
export const catalogParentQuery = `
  {
    productCategories(first: 10, where: {parent: 0, excludeTree: "15"}) {
      nodes {
        databaseId
        name
        slug
        image {
          mediaItemUrl
        }
      }
    }
  }
`;

// Получение родительской категории и её дочерних
export const catalogChildrenQuery = (slug: string) => {
  return `
    {
      productCategory(id: "${slug}", idType: SLUG) {
        name
        description
        children(first: 100) {
          nodes {
            databaseId
            name
            slug
            image {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
};

// Получение данных родительской категории (сео, описание)
export const dataParentQuery = (id: number) => {
  return `
    {
      catalogPageBy(catalogPageId: ${id}) {
        databaseId
        seo {
          titleSeo
          descriptionSeo
        }
        catalogPageContent {
          opisanieKategorii
        }
      }
    }
  `;
};
