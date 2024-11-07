export enum EnumTypeNewsBlog {
  NEWS = 'news',
}

export type TypeNews = {
  data: {
    newsTypes: {
      nodes: {
        databaseId: number;
        date: string;
        slug: string;
        title: string;
        featuredImage: {
          node: {
            mediaItemUrl: string;
          };
        };
        contentTypeName: EnumTypeNewsBlog;
      }[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  };
};
