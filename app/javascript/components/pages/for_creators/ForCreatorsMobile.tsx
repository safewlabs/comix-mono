import React from 'react';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import ForCreatorsPageMobile from '@javascript/components/layout/forCreatorsPage/ForCreatorsPageMobile';

const ForCreatorsMobile = () => {
  return (
    <div>
      <HeaderMobile />
      <ForCreatorsPageMobile />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
};

export default ForCreatorsMobile;
