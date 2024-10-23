export const partnersQuery = `
  {
    pageBy(pageId: 328) {
      seo {
        titleSeo
        descriptionSeo
      }
      partners {
        partnerZagolovok
        partnerOpisanie
        partnerObshheeOpisanieDlyaPartnyorov
        partnerZagolovokDlyaPartnyorov
        partnerPatnyoryRepeat {
          partnerPatnyoryRepeatTekst
          partnerPatnyoryRepeatIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
