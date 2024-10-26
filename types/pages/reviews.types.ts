import type { EnumFrom } from '~/server/types/pages/reviews.types';

export type TypeReview = {
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
};
