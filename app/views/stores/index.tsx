import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebStores from "@javascript/components/pages/stores/index/WebStores";
import MobileStores from "@javascript/components/pages/stores/index/MobileStores";

export default function Stores() {
  const storesPageData = useContent<any>();
// console.log(storesPageData)
  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebStores storesPageData={storesPageData}/>
      )}
      {isMobile && (
        <MobileStores  storesPageData={storesPageData}/>
      )}
    </>
  );
}
