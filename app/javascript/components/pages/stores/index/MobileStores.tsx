import React, {FC} from 'react'
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import StoresPageMobile from '@javascript/components/layout/storesPage/StoresPageMobile';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile'; 
import SortingBarMobile from '@javascript/components/layout/sortingBar/SortingBarMobile';

const MobileStores : FC<any>= ({storesPageData}) => {
  return (
    <>
      <HeaderMobile />
      <SortingBarMobile title={'STORES'} onSortChange={() => {}} />
      <StoresPageMobile storesPageData={storesPageData} />
      <AppMarketingMobile />
      <FooterMobile />
    </>
  );
};

export default MobileStores;
