import { fetcher } from "../fetcher";

export const getGameList = async (params?: FetcherParams) => {
  return fetcher('/games', 'get', params);
}

export const getGameDetail = async (id:number, params?: FetcherParams) => {
  return fetcher(`/games/${id}`, 'get', params)
}

export const getGameOnTheSameSeries = async (id:number, params?: FetcherParams) => {
  return fetcher(`/games/${id}/game-series`, 'get', params)
}

export const getGameScreenShots = async (id:number, params?: FetcherParams) => {
  return fetcher(`/games/${id}/screenshots`, 'get', params)
}

export const getGameAdditions = async (id:number, params?: FetcherParams) => {
  return fetcher(`/games/${id}/additions`, 'get', params)
}

export const getGameAchievement = async (id:number, params?: FetcherParams) => {
  return fetcher(`/games/${id}/achievements`, 'get', params)
}