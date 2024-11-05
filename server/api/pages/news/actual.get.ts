import { requestFetch } from '~/server/utils/requestFetch';
import { actualQuery } from '~/server/queries/pages/news/actual.queries';
import { TypeActual } from '~/server/types/pages/news/actual.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeActual>(actualQuery);

  return data.data.actualTypeFields.nodes;
});
