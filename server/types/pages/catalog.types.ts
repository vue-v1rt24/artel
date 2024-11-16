// Типизация родительских категорий
export type TypeParentCatalog = {
  data: {
    productCategories: {
      nodes: {
        databaseId: number;
        name: string;
        slug: string;
        image: {
          mediaItemUrl: string;
        };
        count: number;
      }[];
    };
  };
};

// Типизация родительской категории и её дочерних
export type TypeChildrenCatalog = {
  data: {
    productCategory: {
      name: string;
      description: string;
      children: {
        nodes: {
          databaseId: number;
          name: string;
          slug: string;
          image: {
            mediaItemUrl: string;
          };
          count: number;
        }[];
      };
    };
  };
};

// Типизация данных родительской категории (сео, описание)
export type TypeDataParentQuery = {
  data: {
    catalogPageBy: {
      databaseId: number;
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      catalogPageContent: {
        opisanieKategorii: string;
      };
    };
  };
};

// Типизация подкатегории и её товаров
export type TypeSubCategory = {
  data: {
    products: {
      nodes: {
        databaseId: number;
        name: string;
        slug: string;
        onSale: boolean;
        price: string;
        regularPrice: string;
        salePrice: string;
        image: {
          mediaItemUrl: string;
        };
        sku: string;
        type: 'SIMPLE';
      }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
    };
    productCategory: {
      name: string;
      description: string;
    };
  };
};

// Значения сортировки
export enum SortEnum {
  POPULAR = 'По популярности',
  PRICE_UP = 'Дешевле',
  PRICE_DOWN = 'Дороже',
}
