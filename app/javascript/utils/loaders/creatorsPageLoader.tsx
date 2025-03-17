import { fetchFromAPI } from '../serverFetcher';

export const creatorsPageLoader = async () => {
  try {
    const uri = 'https://www.comix.one/api/v1/profiles.json';
    const data = await fetchFromAPI(uri);
    return { creatorsPageData: data };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};

export const creatorsPageLoaderPaginated = async ({
  request,
}: {
  request: Request;
}) => {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const baseUri = 'https://www.comix.one/api/v1/profiles.json';
    const uri = `${baseUri}?page=${page}`;
    const data = await fetchFromAPI(uri);
    return { creatorsPageData: data, currentPage: Number(page) };
  } catch (error) {
    throw new Response('Failed to load New Releases', { status: 500 });
  }
};
