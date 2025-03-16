import { fetchFromAPI } from '../serverFetcher';

export const storesLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/stores/random.json';
    const data = await fetchFromAPI(uri);
    return { storesData: data };
  } catch (error) {
    throw new Response('Failed to load stores data', { status: 500 });
  }
};
