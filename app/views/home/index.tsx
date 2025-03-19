import React from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import MobileHome from '@javascript/components/pages/home/index/MobileHome';
import WebHome from '@javascript/components/pages/home/index/WebHome';
import { NewReleasesProps } from '@javascript/components/layout/newReleases/NewReleasesMobile';
import { Top10ComicsProps } from '@javascript/components/layout/top10Comics/Top10Comics';
import { ExploreByGenresProps } from '@javascript/components/layout/genres/ExploreByGenres';
import { StoresProps } from '@javascript/components/layout/stores/Stores';
import { LatestFromComixProps } from '@javascript/components/layout/latestFromComix/LatestFromComix';
import { CreatorData } from '@javascript/components/layout/creators/CreatorsSection';

interface HomeApiResponse {
  new_releases: NewReleasesProps;
  top_ten: Top10ComicsProps;
  genres: ExploreByGenresProps;
  random_stores: StoresProps;
  latest_posts: LatestFromComixProps;
  home_profiles: CreatorData[];
}

export default function HomeIndex() {
  const {
    new_releases: newReleases,
    top_ten: topTen,
    genres: genres,
    random_stores: randomStores,
    latest_posts: latestPosts,
    home_profiles: homeProfiles,
  } = useContent<HomeApiResponse>();

  const isWeb = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <>
      {isWeb && (
        <WebHome
          newReleases={newReleases}
          topTen={topTen}
          genres={genres}
          randomStores={randomStores}
          latestPosts={latestPosts}
          homeProfiles={homeProfiles}
        />
      )}
      {isMobile && <MobileHome />}
    </>
  );
}
