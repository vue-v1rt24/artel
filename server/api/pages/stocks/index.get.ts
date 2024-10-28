import { requestFetch } from '~/server/utils/requestFetch';
import { stocksQuery } from '~/server/queries/pages/stocks.queries';
import { TypeStocks } from '~/server/types/pages/stocks.types';

export default defineEventHandler(async (event) => {
  const data = await requestFetch<TypeStocks>(stocksQuery);

  return {
    home: data.data.stockBy,
    socks: data.data.stocks.nodes,
  };
});
