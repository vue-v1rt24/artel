export const actualQuery = `
{
  actualTypeFields(first: 100) {
    nodes {
      databaseId
      date
      actualGroupField {
        actualIzobrazhenieDlyaVideo {
          node {
            mediaItemUrl
          }
        }
        actualVideo {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;
