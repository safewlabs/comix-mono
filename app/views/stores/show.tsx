import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebStore from "@javascript/components/pages/stores/show/WebStore";
import MobileStore from "@javascript/components/pages/stores/show/MobileStore";
import { ProductType, StoreType } from "@javascript/types/applicationTypes";

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
