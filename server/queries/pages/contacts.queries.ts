export const contactsQuery = `
{
  pageBy(pageId: 380) {
    seo {
      titleSeo
      descriptionSeo
    }
  }
  siteData {
    siteDataFields {
      adresVStavropole
      adresVMihajlovske
      pochta
      nomerTelefona
      koordinatyKarty
      instagram
      telegram
      vatsap
      vkontakte
    }
  }
}
`;
