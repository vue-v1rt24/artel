export type TypePopularProducts = {
  data: {
    products: {
      nodes: {
        databaseId: number;
        name: string;
        onSale: boolean;
        sku: string;
        slug: string;
        type: 'SIMPLE';
        image: {
          mediaItemUrl: string;
        };
        price: string;
        regularPrice: string;
        salePrice: string | null;
      }[];
    };
  };
};
