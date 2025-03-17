import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebHomePage from "@javascript/components/pages/homePage/WebHomePage";
import MobileHomePage from "@javascript/components/pages/homePage/MobileHomePage";
export default function HomeIndex() {
//   const { stores } = useContent<StoresProps>();

  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
       <WebHomePage/>
      )}
      {isMobile && (
       <MobileHomePage/>
      )}
    </>
  );
}
