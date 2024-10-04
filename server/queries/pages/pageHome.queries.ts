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
          homeOffSiteIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
          catalogHomeZagolovok
          catalogHomeTekst
          catalogHomeFon1200 {
            node {
              mediaItemUrl
            }
          }
          catalogHomeFon1600 {
            node {
              mediaItemUrl
            }
          }
          catalogHomeFon320 {
            node {
              mediaItemUrl
            }
          }
          catalogHomeFon688 {
            node {
              mediaItemUrl
            }
          }
          guardiansHomeZagolovok
          guardiansHomeOpisanie
          guardiansHomeIzobrazhenie1 {
            node {
              mediaItemUrl
            }
          }
          guardiansHomeIzobrazhenie2 {
            node {
              mediaItemUrl
            }
          }
          customJewelryZagolovok
          customJewelryOpisanie
          customJewelryIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
};
