import { fetchFromAPI } from '../serverFetcher';

export const newReleasesLoader = async () => {
  try {
    const uri = 'https://comix.one/api/v1/products/new_releases.json';
    const data = await fetchFromAPI(uri);
    return { newReleases: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
