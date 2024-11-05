import { requestFetch } from '~/server/utils/requestFetch';
import { aboutQuery } from '~/server/queries/pages/about.queries';
import { TypeAbout } from '~/server/types/pages/about.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeAbout>(aboutQuery);

  return {
    seo: data.data.pageBy.seo,
    previewScreenPage: data.data.pageBy.previewScreenPage,
    dostizheniya: data.data.pageBy.aboutPage.aboutNagradyIDostizheniya.nodes,
    segodnya: data.data.pageBy.aboutPage.aboutSegodnyaGroup,
    historyBrand: data.data.pageBy.aboutPage.historyBrandRepeat,
    assortment: data.data.pageBy.aboutPage.assortment,
    services: data.data.pageBy.aboutPage.servicesAboutUslugiRepeat,
    gallery: data.data.pageBy.aboutPage.aboutTravelGuideGalereya.nodes,
  };
});
