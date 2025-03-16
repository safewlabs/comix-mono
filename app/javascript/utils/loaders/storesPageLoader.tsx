import { fetchFromAPI } from '../serverFetcher';

export const storesPageLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/stores.json';
    const data = await fetchFromAPI(uri);
    return { storesPageData: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};

export const storesPageLoaderPaginated = async ({
  request,
}: {
  request: Request;
}) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const baseUri = 'https://www.comix.one/api/v1/stores.json';
    const uri = `${baseUri}?page=${page}`;
    const data = await fetchFromAPI(uri);
    return { storesPageData: data, currentPage: Number(page) };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
