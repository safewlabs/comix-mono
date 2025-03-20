import React, { useState, useEffect } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import MobileHome from '@javascript/components/pages/home/index/MobileHome';
import WebHome from '@javascript/components/pages/home/index/WebHome';
import {
  ProductType,
  GenreType,
  StoreType,
  PostType,
  ProfileType,
} from '@javascript/types/applicationTypes';
import WebHomeLoading from '@javascript/components/pages/home/index/WebHomeLoading';
import MobileHomeLoading from '@javascript/components/pages/home/index/MobileHomeLoading';

export interface HomeProps {
  new_releases: ProductType[];
  top_ten: ProductType[];
  genres: GenreType[];
  random_stores: StoreType[];
  latest_posts: PostType[];
  home_profiles: ProfileType[];
}

export default function HomeIndex() {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    new_releases,
    top_ten,
    genres,
    random_stores,
    latest_posts,
    home_profiles,
  } = useContent<HomeProps>();

  // Single media query to determine layout
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  useEffect(() => {
    const isDataLoaded = [
      new_releases,
      top_ten,
      genres,
      random_stores,
      latest_posts,
      home_profiles,
    ].every((item) => item !== undefined);

    if (isDataLoaded) {
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [
    new_releases,
    top_ten,
    genres,
    random_stores,
    latest_posts,
    home_profiles,
  ]);

  // console.log('new releases', new_releases);
  // console.log('top ten', top_ten);
  // console.log('genre', genres);
  // console.log('random stores', random_stores);
  // console.log('latest posts', latest_posts);
  // console.log('creator profile', home_profiles);

  if (loading) {
    return isDesktop ? <WebHomeLoading /> : <MobileHomeLoading />;
  }

  return isDesktop ? (
    <WebHome
      {...{
        new_releases,
        top_ten,
        genres,
        random_stores,
        latest_posts,
        home_profiles,
      }}
    />
  ) : (
    <MobileHome
      {...{
        new_releases,
        top_ten,
        genres,
        random_stores,
        latest_posts,
        home_profiles,
      }}
    />
  );
}
