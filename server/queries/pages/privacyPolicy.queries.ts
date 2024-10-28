export const privacyPolicyQuery = `
{
  pageBy(pageId: 3) {
    seo {
      titleSeo
      descriptionSeo
    }
    content
  }
}
`;
