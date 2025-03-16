import { fetchFromAPI } from '../serverFetcher';

export const creatorsLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/profiles.json';
    const data = await fetchFromAPI(uri);
    return { creatorsData: data };
  } catch (error) {
    throw new Response('Failed to load Creators Data', { status: 500 });
  }
};
