import { EnumTypeNewsBlog } from './index.types';

// Типизация для вывода на странице "Новости"
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

// Типизация полной записи блога
export type TypeSlugBlog = {
  data: {
    blogTypeBy: {
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
  };
};

// Типизация других статей для раздела "Читайте другие статьи"
export type TypeOtherArticle = {
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
      }[];
    };
  };
};
