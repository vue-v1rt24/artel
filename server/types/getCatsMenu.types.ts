export type TypeCatsStocksQuery = {
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
    stocks: {
      nodes: {
        stocksFields: {
          stockIzobrazhenie785: {
            node: {
              mediaItemUrl: string;
            };
          };
          stockVMenyu: boolean;
        };
        slug: string;
      }[];
    };
  };
};
