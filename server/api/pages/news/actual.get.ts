import { requestFetch } from '~/server/utils/requestFetch';
import { actualQuery } from '~/server/queries/pages/news/actual.queries';
import { TypeActual } from '~/server/types/pages/news/actual.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeActual>(actualQuery);

  // === Исключаем запись, которой две и больше недель
  // Получаем две недели в миллисекундах
  const ms = new Date(2024, 10, 18).getTime() - new Date(2024, 10, 4).getTime();

  const res = data.data.actualTypeFields.nodes.filter(
    (item) => new Date().getTime() < new Date(item.date).getTime() + ms,
  );

  //
  return res;
});
