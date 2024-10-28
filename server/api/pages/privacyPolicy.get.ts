import { requestFetch } from '~/server/utils/requestFetch';
import { privacyPolicyQuery } from '~/server/queries/pages/privacyPolicy.queries';
import { typePrivacyPolicy } from '~/server/types/pages/privacyPolicy.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<typePrivacyPolicy>(privacyPolicyQuery);

  return {
    seo: data.data.pageBy.seo,
    content: data.data.pageBy.content,
  };
});
