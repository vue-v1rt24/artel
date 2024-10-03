export const getPopularProductsQueries = `
  {
    products(where: {visibility: VISIBLE, featured: true}, first: 100) {
      nodes {
        databaseId
        name
        onSale
        sku
        slug
        type
        image {
          mediaItemUrl
        }
        ... on SimpleProduct {
          price(format: RAW)
          regularPrice(format: RAW)
          salePrice(format: RAW)
        }
      }
    }
  }
`;
