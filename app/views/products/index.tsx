import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProducts from "@javascript/components/pages/products/index/WebProducts";
import MobileProducts from "@javascript/components/pages/products/index/MobileProducts";
import { PaginationType, ProductType } from "@javascript/types/applicationTypes";

export interface ProductsProps {
  products: ProductType[];
  pagination: PaginationType;
}

export default function ProductsIndex() {
  const { products , pagination} = useContent<ProductsProps>();
  console.log(products);
  console.log(pagination);
  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebProducts />
      )}
      {isMobile && (
        <MobileProducts/>
      )}
    </>
  );
}
