import { EnumTypeNewsBlog } from '~/server/types/pages/news/index.types';

export type TypeArticles = {
  content: {
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
  pagination: {
    hasNextPage: boolean;
    endCursor: string;
  };
};
