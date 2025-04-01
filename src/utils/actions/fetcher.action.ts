import { fetcher } from "../fetcher";

export const getGameList = async (params?: FetcherParams) => {
  return fetcher('/games', 'get', params);
}

export const getGameDetail = async (id:number) => {
  return fetcher(`/games/${id}`, 'get')
}

export const getGameOnTheSameSeries = async (id:number) => {
  return fetcher(`/games/${id}/game-series`, 'get')
}

export const getGameScreenShots = async (id:number) => {
  return fetcher(`/games/${id}/screenshots`, 'get')
}

export const getGameAdditions = async (id:number) => {
  return fetcher(`/games/${id}/additions`, 'get')
}

export const getGameAchievement = async (id:number) => {
  return fetcher(`/games/${id}/achievements`, 'get')
}