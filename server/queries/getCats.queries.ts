export const getCatsQuery = `
    {
      productCategories(first: 100, where: {excludeTree: "15", parent: 0}) {
        nodes {
          databaseId
          name
          slug
        }
      }
    }
`;
