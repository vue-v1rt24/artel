import { SortEnum } from '~/server/types/pages/catalog.types';

// Получение родительских категорий
export const catalogParentQuery = `
  {
    productCategories(first: 10, where: {parent: 0, excludeTree: "15"}) {
      nodes {
        databaseId
        name
        slug
        count
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
        children(first: 100, where: {hideEmpty: true}) {
          nodes {
            databaseId
            name
            slug
            image {
              mediaItemUrl
            }
            count
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

// Получение подкатегории и её товаров (так же передаём сортировку)
export const subCategory = (slug: string, sort: string | undefined, nextPage: string = '') => {
  const sortVal: any = {
    [SortEnum.POPULAR]: 'orderby: {field: POPULARITY}',
    [SortEnum.PRICE_UP]: 'orderby: {field: PRICE, order: ASC}',
    [SortEnum.PRICE_DOWN]: 'orderby: {field: PRICE, order: DESC}',
  };

  return `
    {
      products(
        where: {category: "${slug}", ${sortVal[sort || SortEnum.POPULAR]}}
        first: 16
        after: "${nextPage}"
      ) {
        nodes {
          ... on SimpleProduct {
            databaseId
            name
            slug
            onSale
            price(format: RAW)
            regularPrice(format: RAW)
            salePrice(format: RAW)
            image {
              mediaItemUrl
            }
            sku
            type
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      productCategory(id: "${slug}", idType: SLUG) {
        name
        description
      }
    }
  `;
};
