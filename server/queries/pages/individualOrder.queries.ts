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
        previewScreenIzobrazhenie {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
