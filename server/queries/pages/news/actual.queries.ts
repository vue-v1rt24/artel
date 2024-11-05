export const actualQuery = `
{
  actualTypeFields {
    nodes {
      databaseId
      date
      actualGroupField {
        actualIzobrazhenieDlyaVideo {
          node {
            mediaItemUrl
          }
        }
        actualVideo
      }
    }
  }
}
`;
