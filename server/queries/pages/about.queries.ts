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
      historyBrandRepeat {
        historyBrandRepeatGod
        historyBrandRepeatOpisanie
      }
      assortment {
        assortmentIzobrazhenie1 {
          node {
            mediaItemUrl
          }
        }
        assortmentIzobrazhenie2 {
          node {
            mediaItemUrl
          }
        }
        assortmentZagolovok
        assortmentTekst
      }
      servicesAboutUslugiRepeat {
        servicesAboutUslugiRepeatZagolovok
        servicesAboutUslugiRepeatTekst
        servicesAboutUslugiRepeatTekstVModalnomOkne
        servicesAboutUslugiRepeatIzobrazhenie {
          node {
            mediaItemUrl
          }
        }
        servicesAboutUslugiRepeatSsylkaNaStraniczu {
          nodes {
            slug
          }
        }
      }
      aboutTravelGuideGalereya {
        nodes {
          mediaItemUrl
        }
      }
    }
  }
}
`;
