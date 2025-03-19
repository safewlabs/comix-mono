import React, { useState, useEffect } from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProfiles from "@javascript/components/pages/profiles/index/WebProfiles";
import MobileProfiles from "@javascript/components/pages/profiles/index/MobileProfiles";
import ProfileType from "@javascript/types/profile";
import WebProfilesLoading from "@javascript/components/pages/profiles/index/WebProfilesLoading";
import MobileProfilesLoading from "@javascript/components/pages/profiles/index/MobileProfilesLoading";

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
  const { profiles: creatorsPageData, pagination } = useContent<ProfilesProps>();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (creatorsPageData && pagination) {
      setLoading(false);
    }
  }, [creatorsPageData, pagination]);

  const isWeb = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isWeb && (
        loading ? <WebProfilesLoading /> : <WebProfiles creatorsPageData={creatorsPageData} pageNumber={pagination?.page} />
      )}
      {isMobile && (
        loading ? <MobileProfilesLoading /> : <MobileProfiles creatorsPageData={creatorsPageData} pageNumber={pagination?.page} />
      )}
    </>
  );
}
