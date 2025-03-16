import { fetchFromAPI } from '../serverFetcher';

export type Product = {
  name: string;
  slug: string;
  price: string;
  store_name: string;
  store_slug: string;
  avatar: string;
};

export type GenreData = {
  genre_name: string;
  products: Product[];
};

export type Pagination = {
  prev_url: string | null;
  next_url: string | null;
  count: number;
  page: number;
  next: string | null;
};

export type GenrePageLoaderData = {
  data: GenreData;
  pagination: Pagination;
};

export const genreDataLoader = async ({ slug }: { slug?: string }) => {
  try {
    const uri = `https://www.comix.one/api/v1/genres/${slug}.json`;
    console.log(`Fetching genre data from: ${uri}`); // Debugging

    const data: GenrePageLoaderData = await fetchFromAPI(uri);

    if (!data || !data.data) {
      console.error(`Error: No data returned for genre "${slug}"`);
      throw new Response('Genre not found', { status: 404 });
    }

    return { genreData: data.data };
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw new Response('Failed to load genre data', { status: 500 });
  }
};
