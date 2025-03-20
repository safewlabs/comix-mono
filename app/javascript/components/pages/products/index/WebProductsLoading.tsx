import React from 'react';
import Header from '@javascript/components/layout/header/Header';
import SortingBarLoading from '@javascript/components/common/shimmerLoaders/SortingBarLoading';
import ComicsListLoading from '@javascript/components/common/shimmerLoaders/ComicsListLoading';
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';

const MobileProductsLoading = () => {
  return (
    <>
      <Header />
      <SortingBarLoading title="LATEST COMICS" />
      <ComicsListLoading />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default MobileProductsLoading;
