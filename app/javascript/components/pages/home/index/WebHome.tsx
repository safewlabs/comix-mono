import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import FeaturedOn from '@javascript/components/layout/featuredOn/FeaturedOn';
import Footer from '@javascript/components/layout/footer/Footer';
import ForCreators from '@javascript/components/layout/forCreators/ForCreators';
import Header from '@javascript/components/layout/header/Header';
import MainSection from '@javascript/components/layout/mainSection/MainSection';
import NewReleases from '@javascript/components/layout/newReleases/NewReleases';
import React, { FC } from 'react';
import {
  GenreType,
  ProductType,
  StoreType,
  PostType,
  ProfileType,
} from '@javascript/types/applicationTypes';
import Top10Comics from '@javascript/components/layout/top10Comics/Top10Comics';
import ExploreByGenres from '@javascript/components/layout/genres/ExploreByGenres';
import Stores from '@javascript/components/layout/stores/Stores';
import LatestFromComix from '@javascript/components/layout/latestFromComix/LatestFromComix';
import CreatorsSection from '@javascript/components/layout/creators/CreatorsSection';

type WebHomeProps = {
  new_releases: ProductType[];
  top_ten: ProductType[];
  genres: GenreType[];
  random_stores: StoreType[];
  latest_posts: PostType[];
  home_profiles: ProfileType[];
};

const WebHome: FC<WebHomeProps> = ({
  new_releases,
  top_ten,
  genres,
  random_stores,
  latest_posts,
  home_profiles,
}) => {
  return (
    <div className="webApp">
      <Header />
      <MainSection />
      <NewReleases new_releases={new_releases} />
      <Top10Comics top_ten={top_ten} />
      <ExploreByGenres genres={genres} />
      <FeaturedOn />
      <Stores random_stores={random_stores} />
      <ForCreators />
      <LatestFromComix latest_posts={latest_posts} />
      <CreatorsSection home_profiles={home_profiles} />
      <AppMarketing />
      <Footer />
    </div>
  );
};

export default WebHome;
