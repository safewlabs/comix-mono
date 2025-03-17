import { fetchFromAPI } from '../serverFetcher';

export const latestFromComixLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/posts/latest.json';
    const data = await fetchFromAPI(uri);
    return { latestFromComix: data };
  } catch (error) {
    throw new Response('Failed to load Latest From Comix', { status: 500 });
  }
};
