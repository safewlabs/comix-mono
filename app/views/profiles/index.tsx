import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import WebProfiles from "@javascript/components/pages/profiles/WebProfiles";
import MobileProfiles from "@javascript/components/pages/profiles/MobileProfiles";
import PaginationTypes from "@javascript/types/pagination";

export interface ProfileTypes {
  name: string;
  skills: string;
  slug: string;
  avatar: string;
}

export interface ProfilesProps {
  profiles: ProfileTypes[];
}

export default function ProfilesIndex() {
  const { profiles } = useContent<ProfilesProps>();
  const { pagination } = useContent<PaginationTypes>();
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
