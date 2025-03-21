import React from 'react';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import SortingBarLoadingMobile from '@javascript/components/common/shimmerLoaders/SortingBarLoadingMobile';
import StoresMobileListLoading from '@javascript/components/common/shimmerLoaders/StoresMobileListLoading';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';

const MobileStoresLoading = () => {
  return (
    <>
      <HeaderMobile />
      <SortingBarLoadingMobile title="STORES" />
      <StoresMobileListLoading />
      <AppMarketingMobile />
      <FooterMobile />
    </>
  );
};

export default MobileStoresLoading;
