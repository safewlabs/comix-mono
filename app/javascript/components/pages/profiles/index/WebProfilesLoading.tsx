import CreatorsListLoading from '@javascript/components/common/shimmerLoaders/CreatorsListLoading'
import SortingBarLoading from '@javascript/components/common/shimmerLoaders/SortingBarLoading'
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing'
import Footer from '@javascript/components/layout/footer/Footer'
import Header from '@javascript/components/layout/header/Header'
import React from 'react'

const WebProfilesLoading = () => {
  return (
    <>
    <Header/>
    <SortingBarLoading title='OUR CREATORS'/>
    <CreatorsListLoading/>
    <AppMarketing/>
    <Footer/>
    </>
  )
}

export default WebProfilesLoading