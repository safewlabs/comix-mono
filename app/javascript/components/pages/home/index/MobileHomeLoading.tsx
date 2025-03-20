import React from 'react';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import MainSectionMobileLoading from '@javascript/components/layout/homePageLoadingMobile/MainSectionMobileLoading';
import NewReleasesMobileLoading from '@javascript/components/layout/homePageLoadingMobile/NewReleasesMobileLoading';
import Top10ComicsMobileLoading from '@javascript/components/layout/homePageLoadingMobile/Top10ComicsMobileLoading';
import ExploreByGenresMobileLoading from '@javascript/components/layout/homePageLoadingMobile/ExploreByGenresMobileLoading';
import FeaturedOnMobile from '@javascript/components/layout/featuredOn/FeaturedOnMobile';
import StoresMobileLoading from '@javascript/components/layout/homePageLoadingMobile/StoresMobileLoading';
import ForCreatorsMobile from '@javascript/components/layout/forCreators/ForCreatorsMobile';
import LatestFromComixMobileLoading from '@javascript/components/layout/homePageLoadingMobile/LatestFromComixMobileLoading';
import CreatorsMobileLoading from '@javascript/components/layout/homePageLoadingMobile/CreatorsMobileLoading';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';

const MobileHomeLoading = () => {
  return (
    <div className="appParentWrapper">
      <HeaderMobile />
      <MainSectionMobileLoading />
      <NewReleasesMobileLoading />
      <Top10ComicsMobileLoading />
      <ExploreByGenresMobileLoading />
      <FeaturedOnMobile />
      <StoresMobileLoading />
      <ForCreatorsMobile />
      <LatestFromComixMobileLoading />
      <CreatorsMobileLoading />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
};

export default MobileHomeLoading;
