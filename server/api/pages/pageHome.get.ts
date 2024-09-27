import { requestFetch } from '~/server/utils/requestFetch';
import { pageHomeQuery } from '~/server/queries/pages/pageHome.queries';
import type { TypeGeneralQuery } from '~/server/types/pages/pageHome.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeGeneralQuery>(pageHomeQuery(121));

  return {
    seo: data.data.pageBy.seo,
    offSite: {
      homeOffSiteZagolovok: data.data.pageBy.homeContent.homeOffSiteZagolovok,
      homeOffSitePodzagolovok: data.data.pageBy.homeContent.homeOffSitePodzagolovok,
      homeOffSiteTekst1: data.data.pageBy.homeContent.homeOffSiteTekst1,
      homeOffSiteTekst2: data.data.pageBy.homeContent.homeOffSiteTekst2,
    },
  };
});
