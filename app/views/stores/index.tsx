import React from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import WebStores from '@javascript/components/pages/stores/index/WebStores';
import MobileStores from '@javascript/components/pages/stores/index/MobileStores';
import { PaginationType, StoreType } from '@javascript/types/applicationTypes';

export interface StoresProps {
  stores: StoreType[];
  pagination: PaginationType;
}

export default function StoresIndex() {
  const { stores, pagination } = useContent<StoresProps>();
  console.log(stores);
  console.log(pagination);
  const isWeb = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <>
      {isWeb && <WebStores storesPageData={stores} />}
      {isMobile && <MobileStores storesPageData={stores} />}
    </>
  );
}
