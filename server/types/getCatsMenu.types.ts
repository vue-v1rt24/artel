export type TypeCatsQuery = {
  data: {
    productCategories: {
      nodes: {
        databaseId: number;
        name: string;
        slug: string;
      }[];
    };
  };
};
