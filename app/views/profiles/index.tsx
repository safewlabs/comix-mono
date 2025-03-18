import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProfiles from "@javascript/components/pages/profiles/WebProfiles";
import MobileProfiles from "@javascript/components/pages/profiles/MobileProfiles";
import ProfileType from "@javascript/types/profile";

export interface PaginationType {
  count: number;
  next?: number;
  next_url: string;
  page: number;
  prev_url: string; 
}

export interface ProfilesProps {
  profiles: ProfileType[];
  pagination?: PaginationType;
}

export default function ProfilesIndex() {
  const { profiles: creatorsPageData , pagination} = useContent<ProfilesProps>();
  const pageCount = pagination?.count;

  // console.log(pagination?.count);
  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebProfiles creatorsPageData={creatorsPageData} pageCount={pageCount}/>
      )}
      {isMobile && (
        <MobileProfiles creatorsPageData={creatorsPageData}/>
      )}
    </>
  );
}
