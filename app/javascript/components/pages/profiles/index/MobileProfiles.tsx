import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile'
import FooterMobile from '@javascript/components/layout/footer/FooterMobile'
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile'
import SortingBarMobile from '@javascript/components/layout/sortingBar/SortingBarMobile'
import OurCreatorsFilter from '@javascript/components/layout/ourCreatorsPage/OurCreatorsFilter'
import React, {FC} from 'react'
import OurCreatorsPageMobile from '@javascript/components/layout/ourCreatorsPage/OurCreatorsPageMobile'

export interface ProfileTypes {
  avatar?: string;
  name: string;
  skills: string;
  slug: string;
}

export interface ProfilesProps {
  creatorsPageData: ProfileTypes[];
}

const MobileProfiles :FC<ProfilesProps>= ({creatorsPageData}) => {
  return (
    <>
    <HeaderMobile/>
    {/* Write a Sorting function/Fetch sorted data and pass it here */}
    <SortingBarMobile title={'OUR CREATORS'} onSortChange={() => {}}>
        <OurCreatorsFilter />
    </SortingBarMobile>    
    {/* Pass the sorted data here  */}
    <OurCreatorsPageMobile creatorsPageData={creatorsPageData}/>
    <AppMarketingMobile/>
    <FooterMobile/>
    </>
  )
}

export default MobileProfiles