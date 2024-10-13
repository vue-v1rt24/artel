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
