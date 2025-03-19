import React from 'react'
import OurCreatorsMobleListLoading from '@javascript/components/common/shimmerLoaders/OurCreatorsMobleListLoading'
import SortingBarLoadingMobile from '@javascript/components/common/shimmerLoaders/SortingBarLoadingMobile'
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile'
import ComicsPageFilters from '@javascript/components/layout/comicsPage/ComicsPageFilters'
import FooterMobile from '@javascript/components/layout/footer/FooterMobile'
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile'

const MobileProfilesLoading = () => {
  return (
   <>
    <HeaderMobile/>
    <SortingBarLoadingMobile title='OUR CREATORS'>
        <ComicsPageFilters/>
    </SortingBarLoadingMobile>
    <OurCreatorsMobleListLoading/>
    <AppMarketingMobile/>
    <FooterMobile/>
   </>
  )
}

export default MobileProfilesLoading