import React from 'react'
import Header from '@javascript/components/layout/header/Header'
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing'
import Footer from '@javascript/components/layout/footer/Footer'
import MainSection from '@javascript/components/layout/mainSection/MainSection'
import FeaturedOn from '@javascript/components/layout/featuredOn/FeaturedOn'
import ForCreators from '@javascript/components/layout/forCreators/ForCreators'

const WebHomePage = () => {
  return (
    <div className="webApp">
      <Header/>
      <MainSection/>
      <FeaturedOn/>
      <ForCreators/>
      <AppMarketing/>
      <Footer/>
    </div>
  )
}

export default WebHomePage