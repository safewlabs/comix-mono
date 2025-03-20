import React from 'react';
import Header from '@javascript/components/layout/header/Header';
import SortingBar from '@javascript/components/layout/sortingBar/SortingBar';
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';

const WebProductsLoading = () => {
  return (
    <>
      <Header />
      <SortingBar title={'LATEST COMICS'} onSortChange={() => {}} />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default WebProductsLoading;
