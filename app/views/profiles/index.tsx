import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProfiles from "@javascript/components/pages/profiles/WebProfiles";
import MobileProfiles from "@javascript/components/pages/profiles/MobileProfiles";
import PaginationType from "@javascript/types/pagination";
import { ProfileType } from "@javascript/types/profile";

export interface ProfilesProps {
  profiles: ProfileType[];
  pagination: PaginationType;
}

export default function ProfilesIndex() {
  const { profiles , pagination} = useContent<ProfilesProps>();
  console.log(profiles);
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
        <WebProfiles />
      )}
      {isMobile && (
        <MobileProfiles/>
      )}
    </>
  );
}
