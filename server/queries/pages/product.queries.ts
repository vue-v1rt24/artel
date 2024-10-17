export const productQuery = (slug: string) => `
{
  product(id: "${slug}", idType: SLUG) {
    ... on SimpleProduct {
      databaseId
      name
      slug
      sku
      onSale
      price(format: RAW)
      regularPrice(format: RAW)
      salePrice(format: RAW)
      globalAttributes {
        nodes {
          label
          name
        }
      }
      defaultAttributes {
        nodes {
          name
          value
        }
      }
      galleryImages {
        nodes {
          mediaItemUrl
        }
      }
      seo {
        titleSeo
        descriptionSeo
      }
      productCategories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`;
