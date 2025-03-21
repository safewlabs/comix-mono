import React from 'react';
import Header from '@javascript/components/layout/header/Header';
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';
import SortingBarLoading from '@javascript/components/common/shimmerLoaders/SortingBarLoading';
import StoresPageListLoading from '@javascript/components/common/shimmerLoaders/StoresPageListLoading';

const WebStoresLoading = () => {
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

export default WebStoresLoading;
