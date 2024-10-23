export const remontIzdeliyQuery = `
  {
    pageBy(pageId: 235) {
      seo {
        titleSeo
        descriptionSeo
      }
      previewScreenPage {
        previewScreenIzobrazhenie1280 {
          node {
            mediaItemUrl
          }
        }
        previewScreenIzobrazhenie1920 {
          node {
            mediaItemUrl
          }
        }
        previewScreenIzobrazhenie768 {
          node {
            mediaItemUrl
          }
        }
        previewScreenZagolovok
        previewScreenOpisanie
      }
      remontIzdelii {
        remontDoPosleRepeat {
          remontDoPosleRepeatIzobrazhenieDo {
            node {
              mediaItemUrl
            }
          }
          remontDoPosleRepeatIzobrazheniePosle {
            node {
              mediaItemUrl
            }
          }
          remontDoPosleRepeatOpisanie
        }
        remontZagolovok
        varianty {
          remontIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
          remontNazvanieKnopki
          remontNazvanieRemonta
        }
        remontMaterialZagolovok
        remontMaterialOpisanie
        remontMaterialIzobrazhenie {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
