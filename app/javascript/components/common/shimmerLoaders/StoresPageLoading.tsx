import React from 'react';
import Header from '@javascript/components/layout/header/Header';
import SortingBarLoading from './SortingBarLoading';
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';
import StoresPageListLoading from './StoresPageListLoading';

const StoresPageLoading = () => {
  return (
    <>
      <Header />
      <SortingBarLoading title="STORES" />
      <StoresPageListLoading />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default StoresPageLoading;
