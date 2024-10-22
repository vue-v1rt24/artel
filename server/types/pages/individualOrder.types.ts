export type TypeIndividualOrder = {
  data: {
    pageBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      previewScreenPage: {
        previewScreenZagolovok: string;
        previewScreenOpisanie: string;
        previewScreenIzobrazhenie1920: {
          node: {
            mediaItemUrl: string;
          };
        };
        previewScreenIzobrazhenie1280: {
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
      pageIndividualOrder: {
        individualOrderEtapyRabotyVariantyRepeat: {
          individualOrderEtapyRabotyVariantyRepeatIzobrazhenie: {
            node: {
              mediaItemUrl: string;
            };
          };
          individualOrderEtapyRabotyVariantyRepeatOpisanie: string;
          individualOrderEtapyRabotyVariantyRepeatZagolovok: string;
        }[];
        individualOrderPredostavlyaemVariantyRepeat: {
          individualOrderPredostavlyaemVariantyRepeatIzobrazhenie: {
            node: {
              mediaItemUrl: string;
            };
          };
          individualOrderPredostavlyaemVariantyRepeatOpisanie: string;
          individualOrderPredostavlyaemVariantyRepeatZagolovok: string;
        }[];
        individualOrderGallery: {
          nodes: {
            mediaItemUrl: string;
          }[];
        };
      };
    };
  };
};
