import { ForCreatorsLoading } from '@javascript/components/common/shimmerLoaders/ForCreatorsLoading';
import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';
import Header from '@javascript/components/layout/header/Header';
import React from 'react';

const ForCreatorsWebLoading = () => {
  return (
    <>
      <Header />
      <ForCreatorsLoading />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default ForCreatorsWebLoading;
