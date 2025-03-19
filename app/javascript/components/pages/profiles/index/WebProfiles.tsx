import React, { FC } from 'react'
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing'
import Footer from '@javascript/components/layout/footer/Footer'
import Header from '@javascript/components/layout/header/Header'
import SortingBar from '@javascript/components/layout/sortingBar/SortingBar'
import OurCreatorsPageLayout from '@javascript/components/layout/ourCreatorsPage/OurCreatorsPageLayout'
import Paginate from '@javascript/components/common/Paginate'

interface ProfileType {
  avatar? : string;
  name: string;
  skills: string;
  slug: string
}

type WebProfilesProps = {
  creatorsPageData: ProfileType[];
  pageNumber?: number;
}

const WebProfiles : FC<WebProfilesProps>= ({creatorsPageData, pageNumber}) => {
  return (
    <>
      <Header/>
      {/* Write a Sorting function/Fetch sorted data and pass it here */}
      <SortingBar title="OUR CREATORS" onSortChange={() => {}}/> 
      {/* Pass the sorted data here  */}
      <OurCreatorsPageLayout creatorsPageData={creatorsPageData}/>
      <Paginate currentPage={pageNumber}/>
      <AppMarketing/>
      <Footer/>
    </>
  )
}

export default WebProfiles