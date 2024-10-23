export type TypeRemontIzdeliy = {
  data: {
    pageBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      previewScreenPage: {
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
        previewScreenZagolovok: string;
        previewScreenOpisanie: string;
      };
      remontIzdelii: {
        remontDoPosleRepeat: {
          remontDoPosleRepeatIzobrazhenieDo: {
            node: {
              mediaItemUrl: string;
            };
          };
          remontDoPosleRepeatIzobrazheniePosle: {
            node: {
              mediaItemUrl: string;
            };
          };
          remontDoPosleRepeatOpisanie: string;
        }[];
        remontZagolovok: string;
        varianty: {
          remontIzobrazhenie: {
            node: {
              mediaItemUrl: string;
            };
          };
          remontNazvanieKnopki: string;
          remontNazvanieRemonta: string;
        }[];
        remontMaterialZagolovok: string;
        remontMaterialOpisanie: string;
        remontMaterialIzobrazhenie: {
          node: {
            mediaItemUrl: string;
          };
        };
      };
    };
  };
};
