export type TypeSlugNews = {
  data: {
    newsTypeBy: {
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
      }[];
    };
  };
};
