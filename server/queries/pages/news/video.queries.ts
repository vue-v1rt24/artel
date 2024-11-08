export const videoQuery = (nextPage?: string) => `
{
  videoTypes(first: 6, after: "${nextPage}") {
    nodes {
      databaseId
      title
      videoTypeFields {
        videoSsylkaIzIframeVk
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`;
