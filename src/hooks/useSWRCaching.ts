// useGameHooks.ts
import { modularFetcher, FetcherParams } from "@/utils/swrFetcher";
import useSWR from "swr";

// Hook untuk mendapatkan daftar game, dengan parameter opsional
export const useGameList = (params?: FetcherParams, fallbackData?:any) => {
  // Gunakan array sebagai key agar SWR dapat mendeteksi perubahan params
  const key = params ? ["/games", params] as const : "/games";

  // SWR akan memanggil modularFetcher dengan parameter yang sesuai
  const { data, error, isLoading } = useSWR(
    key,
    (key:any) => Array.isArray(key) ? modularFetcher(key[0], key[1]) : modularFetcher(key),
    { refreshInterval: 60000, revalidateOnMount: true, fallbackData }
  );

  return { data, error, isLoading };
};

// Hook untuk mendapatkan detail game berdasarkan id
export const useGameDetail = (id: number | null, fallbackData?:any) => {
  // Jika id null, jangan lakukan fetching
  const key = id ? `/games/${id}` : null;

  const { data, error, isLoading } = useSWR(key, (endpoint) =>
    modularFetcher(endpoint)
  , {
    refreshInterval: 60000,
    revalidateOnMount: true,
    fallbackData
  });

  return { data, error, isLoading };
};

export const useGameOnTheSameSeries = (id: number | null, fallbackData?:any) => {
  // Jika id null, jangan lakukan fetching
  const key = id ? `/games/${id}/game-series` : null;

  const { data, error, isLoading } = useSWR(key, (endpoint) =>
    modularFetcher(endpoint)
  , {
    refreshInterval: 60000,
    revalidateOnMount: true,
    fallbackData
  });

  return { data, error, isLoading };
};

export const useGameScreenShots = (id: number | null, fallbackData?:any) => {
  // Jika id null, jangan lakukan fetching
  const key = id ? `/games/${id}/screenshots` : null;

  const { data, error, isLoading } = useSWR(key, (endpoint) =>
    modularFetcher(endpoint)
  , {
    refreshInterval: 60000,
    revalidateOnMount: true,
    fallbackData
  });

  return { data, error, isLoading };
};

export const useGameAdditions = (id: number | null, fallbackData?:any) => {
  // Jika id null, jangan lakukan fetching
  const key = id ? `/games/${id}/additions` : null;

  const { data, error, isLoading } = useSWR(key, (endpoint) =>
    modularFetcher(endpoint)
  , {
    refreshInterval: 60000,
    revalidateOnMount: true,
    fallbackData
  });

  return { data, error, isLoading };
};

export const useGameAchievements = (id: number | null, fallbackData?: any, params?: FetcherParams) => {
  // Jika id null, jangan lakukan fetching
  const key = id && params ? [`/games/${id}/achievements`, params] as const : `/games/${id}/achievements`;

  const { data, error, isLoading } = useSWR(
    key,
    (keyParam: string | [string, FetcherParams]) => 
      Array.isArray(keyParam)
        ? modularFetcher(keyParam[0], keyParam[1])
        : modularFetcher(keyParam),
    {
      refreshInterval: 60000,
      revalidateOnMount: true,
      fallbackData
    }
  );

  return { data, error, isLoading };
};

export const useAllGenres = (fallbackData?: any, params?: FetcherParams) => {
  // Jika id null, jangan lakukan fetching
  const key = params ? [`/genres`, params] as const : `/genres`;

  const { data, error, isLoading } = useSWR(
    key,
    (keyParam: string | [string, FetcherParams]) => 
      Array.isArray(keyParam)
        ? modularFetcher(keyParam[0], keyParam[1])
        : modularFetcher(keyParam),
    {
      refreshInterval: 60000,
      revalidateOnMount: true,
      fallbackData
    }
  );

  return { data, error, isLoading };
};

export const useGenreDetail = (id: number | null, fallbackData?: any, params?: FetcherParams) => {
  // Jika id null, jangan lakukan fetching
  const key = id && params ? [`/genres/${id}`, params] as const : `/genres/${id}`;

  const { data, error, isLoading } = useSWR(
    key,
    (keyParam: string | [string, FetcherParams]) => 
      Array.isArray(keyParam)
        ? modularFetcher(keyParam[0], keyParam[1])
        : modularFetcher(keyParam),
    {
      refreshInterval: 60000,
      revalidateOnMount: true,
      fallbackData
    }
  );

  return { data, error, isLoading };
};

export const useAllTags = (fallbackData?: any, params?: FetcherParams) => {
  // Jika id null, jangan lakukan fetching
  const key = params ? [`/tags`, params] as const : `/genres`;

  const { data, error, isLoading } = useSWR(
    key,
    (keyParam: string | [string, FetcherParams]) => 
      Array.isArray(keyParam)
        ? modularFetcher(keyParam[0], keyParam[1])
        : modularFetcher(keyParam),
    {
      refreshInterval: 60000,
      revalidateOnMount: true,
      fallbackData
    }
  );

  return { data, error, isLoading };
};

export const useTagsDetail = (id: number | null, fallbackData?: any, params?: FetcherParams) => {
  // Jika id null, jangan lakukan fetching
  const key = id && params ? [`/tags/${id}`, params] as const : `/genres/${id}`;

  const { data, error, isLoading } = useSWR(
    key,
    (keyParam: string | [string, FetcherParams]) => 
      Array.isArray(keyParam)
        ? modularFetcher(keyParam[0], keyParam[1])
        : modularFetcher(keyParam),
    {
      refreshInterval: 60000,
      revalidateOnMount: true,
      fallbackData
    }
  );

  return { data, error, isLoading };
};