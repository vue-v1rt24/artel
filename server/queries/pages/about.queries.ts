export const aboutQuery = `
{
  pageBy(pageId: 233) {
    seo {
      titleSeo
      descriptionSeo
    }
    previewScreenPage {
      previewScreenZagolovok
      previewScreenOpisanie
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
    }
    aboutPage {
      aboutNagradyIDostizheniya {
        nodes {
          mediaItemUrl
        }
      }
      aboutSegodnyaGroup {
        aboutSegodnyaGroupZagolovok
        aboutSegodnyaGroupVarianty {
          aboutSegodnyaGroupVariantyTekst
          aboutSegodnyaGroupVariantyIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}
`;
