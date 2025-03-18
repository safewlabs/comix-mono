import React, { FC } from 'react'
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing'
import Footer from '@javascript/components/layout/footer/Footer'
import Header from '@javascript/components/layout/header/Header'
import SortingBar from '@javascript/components/layout/sortingBar/SortingBar'
import OurCreatorsPageLayout from '@javascript/components/layout/ourCreatorsPage/OurCreatorsPageLayout'

interface ProfileType {
  avatar? : string;
  name: string;
  skills: string;
  slug: string
}

type WebProfilesProps = {
  creatorsPageData: ProfileType[];
}
const WebProfiles : FC<WebProfilesProps>= ({creatorsPageData}) => {
  return (
    <>
      <Header/>
      {/* Write a Sorting function and pass it here */}
      <SortingBar title="OUR CREATORS" onSortChange={() => {}}/> 
        {/* Pass the sorted data here  */}
      <OurCreatorsPageLayout creatorsPageData={creatorsPageData}/>
      <AppMarketing/>
      <Footer/>
    </>
  )
}

export default WebProfiles