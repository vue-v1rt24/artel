// Типизация запроса из БД
export type TypeGeneralQuery = {
  data: {
    pageBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      homeContent: {
        homeOffSiteZagolovok: string;
        homeOffSitePodzagolovok: string;
        homeOffSiteTekst1: string;
        homeOffSiteTekst2: string;
        homeOffSiteIzobrazhenie: {
          node: {
            mediaItemUrl: string;
          };
        };
        catalogHomeZagolovok: string;
        catalogHomeTekst: string;
        catalogHomeFon1200: {
          node: {
            mediaItemUrl: string;
          };
        };
        catalogHomeFon1600: {
          node: {
            mediaItemUrl: string;
          };
        };
        catalogHomeFon320: {
          node: {
            mediaItemUrl: string;
          };
        };
        catalogHomeFon688: {
          node: {
            mediaItemUrl: string;
          };
        };
        guardiansHomeZagolovok: string;
        guardiansHomeOpisanie: string;
        guardiansHomeIzobrazhenie1: {
          node: {
            mediaItemUrl: string;
          };
        };
        guardiansHomeIzobrazhenie2: {
          node: {
            mediaItemUrl: string;
          };
        };
        customJewelryZagolovok: string;
        customJewelryOpisanie: string;
        customJewelryIzobrazhenie: {
          node: {
            mediaItemUrl: string;
          };
        };
      };
    };
  };
};
