import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import FeaturedOn from '@javascript/components/layout/featuredOn/FeaturedOn';
import Footer from '@javascript/components/layout/footer/Footer';
import ForCreators from '@javascript/components/layout/forCreators/ForCreators';
import Header from '@javascript/components/layout/header/Header';
import CreatorSectionLoadingWeb from '@javascript/components/layout/homePageLoadingWeb/CreatorSectionLoadingWeb';
import LatestFromComixLoadingWeb from '@javascript/components/layout/homePageLoadingWeb/LatestFromComixLoadingWeb';
import NewReleasesLoadingWeb from '@javascript/components/layout/homePageLoadingWeb/NewReleasesLoadingWeb';
import StoresLoadingWeb from '@javascript/components/layout/homePageLoadingWeb/StoresLoadingWeb';
import Top10ComicsLoadingWeb from '@javascript/components/layout/homePageLoadingWeb/Top10ComicsLoadingWeb';
import MainSectionWebLoading from '@javascript/components/layout/indexLoading/MainSectionWebLoading';
import React from 'react';

const WebHomeLoading = () => {
  return (
    <div className="WebApp">
      <Header />
      <MainSectionWebLoading />
      <NewReleasesLoadingWeb />
      <Top10ComicsLoadingWeb />
      <FeaturedOn />
      <StoresLoadingWeb />
      <ForCreators />
      <LatestFromComixLoadingWeb />
      <CreatorSectionLoadingWeb />
      <AppMarketing />
      <Footer />
    </div>
  );
};

export default WebHomeLoading;
