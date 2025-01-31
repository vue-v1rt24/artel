// Все акции
export type TypeStocks = {
  data: {
    stockBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      content: string;
    };
    stocks: {
      nodes: {
        databaseId: number;
        slug: string;
        stocksFields: {
          stockZagolovok: string;
          stockOpisanie: string;
          stockIzobrazhenie688: {
            node: {
              mediaItemUrl: string;
            };
          };
          stockIzobrazhenie785: {
            node: {
              mediaItemUrl: string;
            };
          };
          stockSsylkaNaStoronnijSajt: string;
        };
      }[];
    };
  };
};

// Одна акция
export type TypeStock = {
  data: {
    stockBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      stocksFields: {
        stockZagolovok: string;
        stockFullUsloviya: string;
        stockFullOpisanie: string;
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
    };
  };
};
