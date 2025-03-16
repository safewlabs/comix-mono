import { fetchFromAPI } from '../serverFetcher';

export const latestComicsLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/products.json';
    const data = await fetchFromAPI(uri);
    return { latestComics: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};

export const latestComicsLoaderPaginated = async ({
  request,
}: {
  request: Request;
}) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const baseUri = 'https://www.comix.one/api/v1/products.json';
    const uri = `${baseUri}?page=${page}`;
    const data = await fetchFromAPI(uri);
    return { latestComics: data, currentPage: Number(page) };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
