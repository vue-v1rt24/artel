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
      };
    };
  };
};
