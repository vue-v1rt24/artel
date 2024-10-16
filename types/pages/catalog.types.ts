export type TypeCatalog = {
  products: {
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
  subCategory: {
    name: string;
    description: string;
  };
  dataCategory: {
    databaseId: number;
    seo: {
      titleSeo: string;
      descriptionSeo: string;
    };
    catalogPageContent: {
      opisanieKategorii: string;
    };
  };
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
};
