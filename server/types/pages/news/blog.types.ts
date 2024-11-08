import { EnumTypeNewsBlog } from './index.types';

export type TypeBlog = {
  data: {
    blogsTypes: {
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
