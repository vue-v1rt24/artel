import { requestFetch } from '../utils/requestFetch';
import { getStocksHomeQuery } from '../queries/getStocksHome.queries';
import { TypeGetStocksHomeQuery } from '../types/getStocksHome.types';

export default defineEventHandler(async (event) => {
  const stocksData = await requestFetch<TypeGetStocksHomeQuery>(getStocksHomeQuery);

  //
  const stocks = stocksData.data.stocks.nodes
    .filter((stock) => stock.stocksFields.stockVSlajdereNaGlavnoj)
    .map((stock) => ({
      id: stock.databaseId,
      slug: stock.slug,
      img1600: stock.stocksFields.stockFullIzobrazhenie1600.node.mediaItemUrl,
      img688: stock.stocksFields.stockFullIzobrazhenie688.node.mediaItemUrl,
    }));

  //
  return stocks;
});
