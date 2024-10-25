export const reviewsQuery = `
  {
    reviewsTypes {
      nodes {
        databaseId
        date
        rewiewsTypeName {
          reviewsRepeatImyaFamiliya
          reviewsRepeatKolichestvoZvyozd
          reviewsRepeatKommentarij
          reviewsRepeatOtkudaOtzyv
          reviewsRepeatIzobrazhenie {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;
