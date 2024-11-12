// Типизация для разделов: Новости и Блог
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

// Типизация для раздела: Видео
export type TypesVideo = {
  content: {
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
  pagination: {
    hasNextPage: boolean;
    endCursor: string;
  };
};

// Типизация вывода полной новости
export type TypeNewsFull = {
  singleNews: {
    databaseId: number;
    date: string;
    title: string;
    content: string;
    seo: {
      titleSeo: string;
      descriptionSeo: string;
    };
    newsFields: {
      newsKolichestvoProsmotrov: number;
    };
  };
  otherNews: {
    databaseId: number;
    date: string;
    slug: string;
    title: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
  }[];
};
