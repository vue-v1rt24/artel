import { requestFetch } from '~/server/utils/requestFetch';
import { homeQuery } from '~/server/queries/pages/home.queries';
import type { TypeGeneralQuery } from '~/server/types/pages/home.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeGeneralQuery>(homeQuery);

  return {
    seo: data.data.pageBy.seo,
    offSite: {
      homeOffSiteZagolovok: data.data.pageBy.homeContent.homeOffSiteZagolovok,
      homeOffSitePodzagolovok: data.data.pageBy.homeContent.homeOffSitePodzagolovok,
      homeOffSiteTekst1: data.data.pageBy.homeContent.homeOffSiteTekst1,
      homeOffSiteTekst2: data.data.pageBy.homeContent.homeOffSiteTekst2,
      image: data.data.pageBy.homeContent.homeOffSiteIzobrazhenie.node?.mediaItemUrl,
    },
    catalog: {
      title: data.data.pageBy.homeContent.catalogHomeZagolovok,
      desc: data.data.pageBy.homeContent.catalogHomeTekst,
      image1600: data.data.pageBy.homeContent.catalogHomeFon1600.node?.mediaItemUrl,
      image1200: data.data.pageBy.homeContent.catalogHomeFon1200.node?.mediaItemUrl,
      image688: data.data.pageBy.homeContent.catalogHomeFon688.node?.mediaItemUrl,
      image320: data.data.pageBy.homeContent.catalogHomeFon320.node?.mediaItemUrl,
    },
    guardians: {
      title: data.data.pageBy.homeContent.guardiansHomeZagolovok,
      desc: data.data.pageBy.homeContent.guardiansHomeOpisanie,
      image1: data.data.pageBy.homeContent.guardiansHomeIzobrazhenie1.node?.mediaItemUrl,
      image2: data.data.pageBy.homeContent.guardiansHomeIzobrazhenie2.node?.mediaItemUrl,
    },
    customJewelry: {
      title: data.data.pageBy.homeContent.customJewelryZagolovok,
      desc: data.data.pageBy.homeContent.customJewelryOpisanie,
      image1600: data.data.pageBy.homeContent.customJewelryIzobrazhenie.node?.mediaItemUrl,
    },
    jewelryRepair: {
      title: data.data.pageBy.homeContent.jewelryRepairZagolovok,
      desc: data.data.pageBy.homeContent.jewelryRepairOpisanie,
      typesRepairs: data.data.pageBy.homeContent.jewelryRepairVidyRemonta,
      textPodlozhki: data.data.pageBy.homeContent.jewelryRepairTekstPodlozhki,
    },
    lombard: {
      title: data.data.pageBy.homeContent.lombardHomeZagolovok,
      desc: data.data.pageBy.homeContent.lombardHomeTekst,
      image: data.data.pageBy.homeContent.lombardHomeIzobrazhenie.node?.mediaItemUrl,
      modal: data.data.pageBy.homeContent.lombardHomeRedactor,
    },
  };
});
