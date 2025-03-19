import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import FeaturedOn from '@javascript/components/layout/featuredOn/FeaturedOn';
import Footer from '@javascript/components/layout/footer/Footer';
import ForCreators from '@javascript/components/layout/forCreators/ForCreators';
import Header from '@javascript/components/layout/header/Header';
import MainSection from '@javascript/components/layout/mainSection/MainSection';
import React, { FC } from 'react';
import { NewReleasesProps } from '@javascript/components/layout/newReleases/NewReleasesMobile';
import { Top10ComicsProps } from '@javascript/components/layout/top10Comics/Top10Comics';
import { ExploreByGenresProps } from '@javascript/components/layout/genres/ExploreByGenres';
import { StoresProps } from '@javascript/components/layout/stores/Stores';
import { LatestFromComixProps } from '@javascript/components/layout/latestFromComix/LatestFromComix';
import { CreatorData } from '@javascript/components/layout/creators/CreatorsSection';

export interface HomeProps {
  newReleases: NewReleasesProps;
  topTen: Top10ComicsProps;
  genres: ExploreByGenresProps;
  randomStores: StoresProps;
  latestPosts: LatestFromComixProps;
  homeProfiles: CreatorData[];
}

const WebHome: FC<HomeProps> = ({
  newReleases,
  topTen,
  genres,
  randomStores,
  latestPosts,
  homeProfiles,
}) => {
  console.log('New Releases', newReleases);
  console.log('Top ten', topTen);
  console.log('Genres', genres);
  console.log('Random stores', randomStores);
  console.log('Latest posts', latestPosts);
  console.log('home profiles', homeProfiles);
  return (
    <div className="webApp">
      <Header />
      <MainSection />
      <FeaturedOn />
      <ForCreators />
      <AppMarketing />
      <Footer />
    </div>
  );
};

export default WebHome;
