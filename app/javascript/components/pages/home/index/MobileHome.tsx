import React, { FC } from 'react';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FeaturedOnMobile from '@javascript/components/layout/featuredOn/FeaturedOnMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';
import ForCreatorsMobile from '@javascript/components/layout/forCreators/ForCreatorsMobile';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import MainSection from '@javascript/components/layout/mainSection/MainSection';
import {
  GenreType,
  ProductType,
  StoreType,
  PostType,
  ProfileType,
} from '@javascript/types/applicationTypes';
import NewReleasesMobile from '@javascript/components/layout/newReleases/NewReleasesMobile';
import Top10ComicsMobile from '@javascript/components/layout/top10Comics/Top10ComicsMobile';
import ExploreByGenresMobile from '@javascript/components/layout/genres/ExploreByGenresMobile';
import StoresMobile from '@javascript/components/layout/stores/StoresMobile';
import LatestFromComixMobile from '@javascript/components/layout/latestFromComix/LatestFromComixMobile';
import CreatorsSectionMobile from '@javascript/components/layout/creators/CreatorsSectionMobile';

type MobileHomeProps = {
  new_releases: ProductType[];
  top_ten: ProductType[];
  genres: GenreType[];
  random_stores: StoreType[];
  latest_posts: PostType[];
  home_profiles: ProfileType[];
};

const MobileHome: FC<MobileHomeProps> = ({
  new_releases,
  top_ten,
  genres,
  random_stores,
  latest_posts,
  home_profiles,
}) => {
  return (
    <div className="appParentWrapper">
      <HeaderMobile />
      <MainSection />
      <NewReleasesMobile new_releases={new_releases} />
      <Top10ComicsMobile top_ten={top_ten} />
      <ExploreByGenresMobile genres={genres} />
      <FeaturedOnMobile />
      <StoresMobile random_stores={random_stores} />
      <ForCreatorsMobile />
      <LatestFromComixMobile latest_posts={latest_posts} />
      <CreatorsSectionMobile home_profiles={home_profiles} />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
};

export default MobileHome;
