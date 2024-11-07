export const newsQuery = `
{
  newsTypes(first: 10) {
    nodes {
      databaseId
      date
      slug
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      contentTypeName
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;
