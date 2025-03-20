import React from 'react';
import SortingBarLoadingMobile from '@javascript/components/common/shimmerLoaders/SortingBarLoadingMobile';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import ComicsPageFilters from '@javascript/components/layout/comicsPage/ComicsPageFilters';
import ComicsPageMobileShimmer from '@javascript/components/common/shimmerLoaders/ComicsPageMobileShimmer';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';

const MobileProductsLoading = () => {
  return (
    <div>
      <HeaderMobile />
      <SortingBarLoadingMobile title="LATEST COMICS">
        <ComicsPageFilters />
      </SortingBarLoadingMobile>
      <ComicsPageMobileShimmer />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
};

export default MobileProductsLoading;
