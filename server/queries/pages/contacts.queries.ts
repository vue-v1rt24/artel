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
      czentrKarty
      koordinatyKarty
      koordinatyKartyAdresaVMihajlovske
      instagram
      telegram
      vatsap
      vkontakte
    }
  }
}
`;
