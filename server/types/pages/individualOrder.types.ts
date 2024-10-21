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
        previewScreenIzobrazhenie: {
          node: {
            mediaItemUrl: string;
          };
        };
      };
    };
  };
};
