export type TypesVideo = {
  data: {
    videoTypes: {
      nodes: {
        databaseId: number;
        title: string;
        videoTypeFields: {
          videoSsylkaIzIframeVk: string;
        };
        featuredImage: {
          node: {
            mediaItemUrl: string;
          };
        };
      }[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  };
};
