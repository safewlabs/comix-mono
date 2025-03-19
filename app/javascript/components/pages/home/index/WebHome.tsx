import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import FeaturedOn from '@javascript/components/layout/featuredOn/FeaturedOn';
import Footer from '@javascript/components/layout/footer/Footer';
import ForCreators from '@javascript/components/layout/forCreators/ForCreators';
import Header from '@javascript/components/layout/header/Header';
import MainSection from '@javascript/components/layout/mainSection/MainSection';
import React from 'react';

function WebHome() {
  return (
    <div className="webApp">
      <Header />
      <MainSection />
      <FeaturedOn />
      <ForCreators />
      <AppMarketing />
      <Footer />
    </div>
  );
}

export default WebHome;
