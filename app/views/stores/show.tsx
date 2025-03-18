import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import StoreType from "@javascript/types/store";
import ProductType from "@javascript/types/product";
import WebStore from "@javascript/components/pages/stores/show/WebStore";
import MobileStore from "@javascript/components/pages/stores/show/MobileStore";

type StoreProps = {
  store: StoreType,
  products: ProductType[]
};

export default function StoreShow() {
  const { store, products } = useContent<StoreProps>();
  console.log(store)
  console.log(products)

  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebStore />
      )}
      {isMobile && (
        <MobileStore />
      )}
    </>
  );
}
