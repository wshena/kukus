const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_RAWDG_API_KEY;

export interface FetcherParams {
  [key: string]: string | number;
}

export const modularFetcher = async (
  endpoint?: string | null | undefined,
  params?: FetcherParams
) => {
  // Gabungkan API key dengan parameter tambahan
  const mergedParams = { key: API_KEY, ...params };

  // Buat query string jika ada parameter
  const queryString =
    Object.keys(mergedParams).length > 0
      ? "?" + new URLSearchParams(mergedParams as Record<string, string>).toString()
      : "";

  // Buat URL lengkap
  const url = `${BASE_URL}${endpoint}${queryString}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};
