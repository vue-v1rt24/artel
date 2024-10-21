export const individualOrderQuery = `
  {
    pageBy(pageId: 231) {
      seo {
        titleSeo
        descriptionSeo
      }
      previewScreenPage {
        previewScreenZagolovok
        previewScreenOpisanie
        previewScreenIzobrazhenie1920 {
          node {
            mediaItemUrl
          }
        }
        previewScreenIzobrazhenie1280 {
          node {
            mediaItemUrl
          }
        }
        previewScreenIzobrazhenie768 {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
