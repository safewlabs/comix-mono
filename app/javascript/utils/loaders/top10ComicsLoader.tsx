import { fetchFromAPI } from '../serverFetcher';

export const top10ComicsLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/products/top_ten.json';
    const data = await fetchFromAPI(uri);
    return { top10Comics: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
