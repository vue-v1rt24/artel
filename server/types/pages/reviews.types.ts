export enum EnumFrom {
  ЯНДЕКС = 'Яндекс',
  '2ГИС' = '2 Гис',
}

export type TypeReviews = {
  data: {
    reviewsTypes: {
      nodes: {
        databaseId: number;
        date: string;
        rewiewsTypeName: {
          reviewsRepeatImyaFamiliya: string;
          reviewsRepeatKolichestvoZvyozd: number;
          reviewsRepeatKommentarij: string;
          reviewsRepeatOtkudaOtzyv: EnumFrom;
          reviewsRepeatIzobrazhenie: {
            node: {
              mediaItemUrl: string;
            };
          };
        };
      }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
    };
  };
};
