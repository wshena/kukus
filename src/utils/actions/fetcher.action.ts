import { fetcher } from "../fetcher";

export const getGameList = async (params?: FetcherParams) => {
  return fetcher('/games', 'get', params);
}

export const getGameDetail = async (id:number) => {
  return fetcher(`/games/${id}`, 'get')
}