import React, { useEffect, useState } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import WebProducts from '@javascript/components/pages/products/index/WebProducts';
import MobileProducts from '@javascript/components/pages/products/index/MobileProducts';
import {
  PaginationType,
  ProductType,
} from '@javascript/types/applicationTypes';
import WebProductsLoading from '@javascript/components/pages/products/index/WebProductsLoading';
import MobileProductsLoading from '@javascript/components/pages/products/index/MobileProductsLoading';

export interface ProductsProps {
  products: ProductType[];
  pagination: PaginationType;
}

export default function ProductsIndex() {
  const [loading, setLoading] = useState<boolean>(true);
  const { products, pagination } = useContent<ProductsProps>();

  const isDesktop = useMediaQuery(
    { query: '(min-width: 769px)' },
    undefined,
    (matches) => {
      return matches;
    }
  );

  useEffect(() => {
    if (products && pagination) {
      console.log(products, pagination);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [products, pagination]);

  return (
    <>
      {loading ? (
        isDesktop ? (
          <WebProductsLoading />
        ) : (
          <MobileProductsLoading />
        )
      ) : isDesktop ? (
        <WebProducts />
      ) : (
        <MobileProducts />
      )}
    </>
  );
}
