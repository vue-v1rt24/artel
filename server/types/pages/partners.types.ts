export type TypePartners = {
  data: {
    pageBy: {
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      partners: {
        partnerZagolovok: string;
        partnerOpisanie: string;
        partnerObshheeOpisanieDlyaPartnyorov: string;
        partnerZagolovokDlyaPartnyorov: string;
        partnerPatnyoryRepeat: {
          partnerPatnyoryRepeatTekst: string;
          partnerPatnyoryRepeatIzobrazhenie: {
            node: {
              mediaItemUrl: string;
            };
          };
        }[];
      };
    };
  };
};
