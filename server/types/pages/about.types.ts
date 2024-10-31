export type TypeAbout = {
  data: {
    pageBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      previewScreenPage: {
        previewScreenZagolovok: string;
        previewScreenOpisanie: string;
        previewScreenIzobrazhenie1280: {
          node: {
            mediaItemUrl: string;
          };
        };
        previewScreenIzobrazhenie1920: {
          node: {
            mediaItemUrl: string;
          };
        };
        previewScreenIzobrazhenie768: {
          node: {
            mediaItemUrl: string;
          };
        };
      };
      aboutPage: {
        aboutNagradyIDostizheniya: {
          nodes: {
            mediaItemUrl: string;
          }[];
        };
        aboutSegodnyaGroup: {
          aboutSegodnyaGroupZagolovok: string;
          aboutSegodnyaGroupVarianty: {
            aboutSegodnyaGroupVariantyTekst: string;
            aboutSegodnyaGroupVariantyIzobrazhenie: {
              node: {
                mediaItemUrl: string;
              };
            };
          }[];
        };
        historyBrandRepeat: {
          historyBrandRepeatGod: string;
          historyBrandRepeatOpisanie: string;
        }[];
      };
    };
  };
};