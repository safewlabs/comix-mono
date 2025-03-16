import { useState, useEffect } from 'react';

const useSortBy = (fetchedData?: any, exploreByGenres?: any) => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortedComics, setSortedComics] = useState<Array<any>>(
    fetchedData?.data || []
  );
  const [sortedGenres, setSortedGenres] = useState<Array<any>>(
    exploreByGenres ?? []
  );

  useEffect(() => {
    const genres = Array.isArray(exploreByGenres) ? [...exploreByGenres] : [];
    const comics = fetchedData?.data || [];

    if (!sortBy) {
      setSortedComics(comics);
      setSortedGenres(genres);
      return;
    }

    const sortedGenres = genres.sort((a: any, b: any) => {
      if (sortBy === 'title-az') return a.name.localeCompare(b.name);
      if (sortBy === 'title-za') return b.name.localeCompare(a.name);
      return 0;
    });

    const sortedComics = comics.sort((a: any, b: any) => {
      if (sortBy === 'title-az') return a.name.localeCompare(b.name);
      if (sortBy === 'title-za') return b.name.localeCompare(a.name);
      if (sortBy === 'price-asc') {
        return (
          Number(a.price.replace(/[^0-9.-]+/g, '')) -
          Number(b.price.replace(/[^0-9.-]+/g, ''))
        );
      }
      if (sortBy === 'price-desc') {
        return (
          Number(b.price.replace(/[^0-9.-]+/g, '')) -
          Number(a.price.replace(/[^0-9.-]+/g, ''))
        );
      }
      return 0;
    });

    setSortedComics(sortedComics);
    setSortedGenres(sortedGenres);
  }, [sortBy, fetchedData, exploreByGenres]);

  return { setSortBy, sortedComics, sortedGenres };
};

export default useSortBy;
