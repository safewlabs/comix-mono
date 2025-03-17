import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';
import Header from '@javascript/components/layout/header/Header';
import SortingBar from '@javascript/components/layout/sortingBar/SortingBar';
import StoresPage from '@javascript/components/layout/storesPage/StoresPage';
import React, { FC } from 'react';

const WebStores: FC<any> = ({ storesPageData }) => {
  return (
    <>
      <Header />
      <SortingBar title={'STORES'} onSortChange={() => {}} />
      <StoresPage storesPageData={storesPageData} />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default WebStores;
