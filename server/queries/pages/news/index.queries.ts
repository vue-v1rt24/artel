export const newsQuery = (nextPage?: string) => `
{
  newsTypes(first: 6, after: "${nextPage}") {
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
