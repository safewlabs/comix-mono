import { fetchFromAPI } from '../serverFetcher';

export const storeFrontPageLoader = async () => {
  try {
    const uri =
      'https://www.comix.one/api/v1/stores/markosia-enterprises-beb3e8390772.json';
    const data = await fetchFromAPI(uri);
    return { storeFrontPageData: data };
  } catch (error) {
    throw new Response('Failed to load Latest From Comix', { status: 500 });
  }
};
