export type TypeCatsStocksQuery = {
  data: {
    productCategories: {
      nodes: {
        databaseId: number;
        name: string;
        slug: string;
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
          stockSsylkaNaStoronnijSajt: string;
        };
        slug: string;
      }[];
    };
  };
};
