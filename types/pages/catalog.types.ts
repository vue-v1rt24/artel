export type TypeProducts = {
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
};

//
export type TypeCatalog = {
  products: TypeProducts[];
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
