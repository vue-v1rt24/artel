import { requestFetch } from '../utils/requestFetch';
import { getCatsQuery } from '../queries/getCats.queries';
import { TypeCatsStocksQuery } from '../types/getCatsMenu.types';

export default defineEventHandler(async (event) => {
  const catsStocks = await requestFetch<TypeCatsStocksQuery>(getCatsQuery);

  //
  const stockInMenu = catsStocks.data.stocks.nodes.filter((s) => s.stocksFields.stockVMenyu)[0];

  const stock = {
    slug: stockInMenu?.slug,
    image: stockInMenu?.stocksFields.stockIzobrazhenie785.node?.mediaItemUrl,
  };

  //
  return {
    cats: catsStocks.data.productCategories.nodes,
    stock,
  };
});
