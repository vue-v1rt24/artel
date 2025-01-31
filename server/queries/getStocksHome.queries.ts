export const getStocksHomeQuery = `
    {
      stocks {
        nodes {
          databaseId
          slug
          stocksFields {
            stockVSlajdereNaGlavnoj
            stockFullIzobrazhenie1600 {
              node {
                mediaItemUrl
              }
            }
            stockFullIzobrazhenie688 {
              node {
                mediaItemUrl
              }
            }
            stockSsylkaNaStoronnijSajt
          }
        }
      }
    }
`;
