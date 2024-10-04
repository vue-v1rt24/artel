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
      image: data.data.pageBy.homeContent.homeOffSiteIzobrazhenie.node.mediaItemUrl,
    },
    catalog: {
      title: data.data.pageBy.homeContent.catalogHomeZagolovok,
      desc: data.data.pageBy.homeContent.catalogHomeTekst,
      image1600: data.data.pageBy.homeContent.catalogHomeFon1600.node.mediaItemUrl,
      image1200: data.data.pageBy.homeContent.catalogHomeFon1200.node.mediaItemUrl,
      image688: data.data.pageBy.homeContent.catalogHomeFon688.node.mediaItemUrl,
      image320: data.data.pageBy.homeContent.catalogHomeFon320.node.mediaItemUrl,
    },
    guardians: {
      title: data.data.pageBy.homeContent.guardiansHomeZagolovok,
      desc: data.data.pageBy.homeContent.guardiansHomeOpisanie,
      image1: data.data.pageBy.homeContent.guardiansHomeIzobrazhenie1.node.mediaItemUrl,
      image2: data.data.pageBy.homeContent.guardiansHomeIzobrazhenie2.node.mediaItemUrl,
    },
  };
});
