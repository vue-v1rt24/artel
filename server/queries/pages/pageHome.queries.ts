export const pageHomeQuery = (pageId: number) => {
  return `
    {
      pageBy(pageId: ${pageId}) {
        seo {
          titleSeo
          descriptionSeo
        }
        homeContent {
          homeOffSiteZagolovok
          homeOffSitePodzagolovok
          homeOffSiteTekst1
          homeOffSiteTekst2
        }
      }
    }
  `;
};
