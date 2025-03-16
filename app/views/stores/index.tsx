import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebStores from "@javascript/components/pages/stores/index/WebStores";
import MobileStores from "@javascript/components/pages/stores/index/MobileStores";

export interface StoreTypes {
  name: string;
  display_image: string;
  slug: string;
}

export interface StoresProps {
  stores: StoreTypes[];
}

export default function StoresIndex() {
  const { stores } = useContent<StoresProps>();
  console.log(stores)
  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebStores storesPageData={stores}/>
      )}
      {isMobile && (
        <MobileStores  storesPageData={stores}/>
      )}
    </>
  );
}
