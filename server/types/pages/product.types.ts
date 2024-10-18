export type TypeProduct = {
  data: {
    product: {
      databaseId: number;
      name: string;
      slug: string;
      sku: string;
      onSale: boolean;
      price: string;
      regularPrice: string;
      salePrice: string;
      defaultAttributes: {
        nodes: {
          name: string;
          value: string;
        }[];
      };
      galleryImages: {
        nodes: {
          mediaItemUrl: string;
        }[];
      };
      seo: {
        titleSeo: string;
        descriptionSeo: string;
      };
      productCategories: {
        nodes: {
          name: string;
          slug: string;
        }[];
      };
    };
  };
};
