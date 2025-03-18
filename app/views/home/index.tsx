import React from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import MobileHome from '@javascript/components/pages/home/MobileHome';
import WebHome from '@javascript/components/pages/home/WebHome';
import ProductType from '@javascript/types/product';
import GenreType from '@javascript/types/genre';
import StoreType from '@javascript/types/store';
import PostType from '@javascript/types/post';
import ProfileType from '@javascript/types/profile';

export interface StoresProps {
  new_releases: ProductType[];
  top_ten: ProductType[];
  genres: GenreType[];
  random_stores: StoreType[];
  latest_posts: PostType[];
  home_profiles: ProfileType[];
}

export default function StoresIndex() {
  const { new_releases, top_ten, genres, random_stores, latest_posts, home_profiles } =
    useContent<StoresProps>();
  console.log('new releases', new_releases);
  console.log('top ten', top_ten);
  console.log('genre', genres);
  console.log('random stores', random_stores);
  console.log('latest posts', latest_posts);
  console.log('creator profile', home_profiles);
  const isWeb = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <>
      {isWeb && <WebHome />}
      {isMobile && <MobileHome />}
    </>
  );
}
