import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile'
import FooterMobile from '@javascript/components/layout/footer/FooterMobile'
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile'
import SortingBarMobile from '@javascript/components/layout/sortingBar/SortingBarMobile'
import OurCreatorsFilter from '@javascript/components/layout/ourCreatorsPage/OurCreatorsFilter'
import React, {FC} from 'react'
import OurCreatorsPageMobile from '@javascript/components/layout/ourCreatorsPage/OurCreatorsPageMobile'
import ProfileType from '@javascript/types/profile'
import Paginate from '@javascript/components/common/Paginate'

export interface ProfilesProps {
  creatorsPageData: ProfileType[];
  pageNumber?: number;
}

const MobileProfiles :FC<ProfilesProps>= ({creatorsPageData, pageNumber}) => {
  return (
    <>
    <HeaderMobile/>
    {/* Write a Sorting function/Fetch sorted data and pass it here */}
    <SortingBarMobile title={'OUR CREATORS'} onSortChange={() => {}}>
        <OurCreatorsFilter />
    </SortingBarMobile>    
    {/* Pass the sorted data here  */}
    <OurCreatorsPageMobile creatorsPageData={creatorsPageData}/>
    <Paginate currentPage={pageNumber}/>
    <AppMarketingMobile/>
    <FooterMobile/>
    </>
  )
}

export default MobileProfiles