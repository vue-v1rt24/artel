export const reviewsQuery = (nextPage: string = '') => `
  {
    reviewsTypes(first: 9, after: "${nextPage}") {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
