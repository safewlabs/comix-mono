import { fetchFromAPI } from '../serverFetcher';

export const exploreByGenresLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/genres.json';
    const data = await fetchFromAPI(uri);
    return { exploreByGenres: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
