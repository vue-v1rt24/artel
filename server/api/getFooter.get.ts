import { requestFetch } from '../utils/requestFetch';
import { footerQuery } from '../queries/getFooter.queries';
import type { TypeFooter } from '../types/getFooter.types';

export default defineEventHandler(async (event) => {
  const footerData = await requestFetch<TypeFooter>(footerQuery);

  return footerData.data.siteData.siteDataFields;
});
