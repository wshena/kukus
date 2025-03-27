'use server'
import axios from "axios";
import { limiter } from "./limiter";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_RAWDG_API_KEY;

export const fetcher = async (
  url: string,
  method: HttpMethod,
  params?: FetcherParams,
  headers?: Record<string, string>,
): Promise<FetchResponse> => {
  const MAX_RETRY = 3;
  let attempt = 0;

  while (attempt < MAX_RETRY) {
    try {
      return await limiter.schedule(async () => {
        const response = await axios.request({
          method,
          url: `${BASE_URL}${url}`,
          params: {
            key: API_KEY,
            ...params
          },
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        });

        return {
          success: true,
          res: response.data,
        };
      });
    } catch (error: any) {
      // Jika error karena rate limit (status 429)
      if (error.response?.status === 429) {
        console.warn(`Rate limit exceeded. Retrying attempt ${attempt + 1}...`);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay 2 detik sebelum retry
        attempt++;
      } else {
        console.error("Unexpected fetcher error:", error);
        return {
          success: false,
          res: error,
        };
      }
    }
  }

  throw new Error("Max retry limit reached");
};