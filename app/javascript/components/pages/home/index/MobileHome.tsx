import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FeaturedOnMobile from '@javascript/components/layout/featuredOn/FeaturedOnMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';
import ForCreatorsMobile from '@javascript/components/layout/forCreators/ForCreatorsMobile';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import MainSection from '@javascript/components/layout/mainSection/MainSection';
import React from 'react';

function MobileHome() {
  return (
    <div className="appParentWrapper">
      <HeaderMobile />
      <MainSection />
      <FeaturedOnMobile />
      <ForCreatorsMobile />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
}

export default MobileHome;
