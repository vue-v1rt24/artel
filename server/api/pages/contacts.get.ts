import { requestFetch } from '~/server/utils/requestFetch';
import { contactsQuery } from '~/server/queries/pages/contacts.queries';
import { TypeContacts } from '~/server/types/pages/contacts.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeContacts>(contactsQuery);

  return {
    seo: data.data.pageBy.seo,
    contacts: data.data.siteData.siteDataFields,
  };
});
