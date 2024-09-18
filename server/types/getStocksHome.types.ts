export type TypeGetStocksHomeQuery = {
  data: {
    stocks: {
      nodes: {
        databaseId: number;
        slug: string;
        stocksFields: {
          stockVSlajdereNaGlavnoj: boolean;
          stockFullIzobrazhenie1600: {
            node: {
              mediaItemUrl: string;
            };
          };
          stockFullIzobrazhenie688: {
            node: {
              mediaItemUrl: string;
            };
          };
        };
      }[];
    };
  };
};
