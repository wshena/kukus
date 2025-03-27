import { fetcher } from "../fetcher";

export const getGameList = async (params?: FetcherParams) => {
  return fetcher('/games', 'get', params);
}