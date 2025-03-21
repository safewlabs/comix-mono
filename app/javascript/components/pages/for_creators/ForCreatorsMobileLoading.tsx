import { ForCreatorsLoadingMobile } from '@javascript/components/common/shimmerLoaders/ForCreatorsLoading';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import React from 'react';

const ForCreatorsMobileLoading = () => {
  return (
    <>
      <HeaderMobile />
      <ForCreatorsLoadingMobile />
      <AppMarketingMobile />
      <FooterMobile />
    </>
  );
};

export default ForCreatorsMobileLoading;
