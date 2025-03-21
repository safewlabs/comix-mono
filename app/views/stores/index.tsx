import React, { useEffect, useState } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import WebStores from '@javascript/components/pages/stores/index/WebStores';
import MobileStores from '@javascript/components/pages/stores/index/MobileStores';
import { PaginationType, StoreType } from '@javascript/types/applicationTypes';
import WebStoresLoading from '@javascript/components/pages/stores/index/WebStoresLoading';
import MobileStoresLoading from '@javascript/components/pages/stores/index/MobileStoresLoading';

export interface StoresProps {
  stores: StoreType[];
  pagination: PaginationType;
}

export default function StoresIndex() {
  const [loading, setLoading] = useState<boolean>(true);
  const { stores, pagination } = useContent<StoresProps>();

  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  useEffect(() => {
    const isDataLoaded = [stores, pagination].every(
      (item) => item !== undefined
    );
    if (isDataLoaded) {
      const timer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [stores, pagination]);
  if (loading) {
    return isDesktop ? <WebStoresLoading /> : <MobileStoresLoading />;
  }

  return isDesktop ? (
    <WebStores
      {...{
        storesPageData: { stores },
        pagination,
      }}
    />
  ) : (
    <MobileStores
      {...{
        storesPageData: { stores },
        pagination,
      }}
    />
  );
}
