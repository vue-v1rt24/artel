// Все акции
export const stocksQuery = `
{
  stockBy(stockId: 378) {
    seo {
      titleSeo
      descriptionSeo
    }
    content
  }
  stocks(where: {notIn: "378"}, first: 100) {
    nodes {
      databaseId
      slug
      stocksFields {
        stockZagolovok
        stockOpisanie
        stockIzobrazhenie785 {
          node {
            mediaItemUrl
          }
        }
        stockIzobrazhenie688 {
          node {
            mediaItemUrl
          }
        }
        stockSsylkaNaStoronnijSajt
      }
    }
  }
}
`;

// Одна акция
export const stockQuery = (slug: string) => `
{
  stockBy(slug: "${slug}") {
    seo {
      titleSeo
      descriptionSeo
    }
    stocksFields {
      stockZagolovok
      stockFullUsloviya
      stockFullOpisanie
      stockFullIzobrazhenie1600 {
        node {
          mediaItemUrl
        }
      }
      stockFullIzobrazhenie688 {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
`;
