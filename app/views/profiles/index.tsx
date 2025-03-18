import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProfiles from "@javascript/components/pages/profiles/WebProfiles";
import MobileProfiles from "@javascript/components/pages/profiles/MobileProfiles";

export interface ProfileTypes {
  avatar?: string;
  name: string;
  skills: string;
  slug: string;
}

export interface ProfilesProps {
  profiles: ProfileTypes[];
}

export default function ProfilesIndex() {
const { profiles: creatorsPageData } = useContent<ProfilesProps>();
  console.log(creatorsPageData)
  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebProfiles creatorsPageData={creatorsPageData}/>
      )}
      {isMobile && (
        <MobileProfiles creatorsPageData={creatorsPageData}/>
      )}
    </>
  );
}
