import { json } from '@remix-run/node';

export const fetchFromAPI = async <T>(
  uri: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${uri}: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${uri}:`, error);
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
};
