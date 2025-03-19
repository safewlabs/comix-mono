import React, { useEffect, useState } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import WebProfiles from '@javascript/components/pages/profiles/index/WebProfiles';
import MobileProfiles from '@javascript/components/pages/profiles/index/MobileProfiles';
import ProfileType from '@javascript/types/profile';
import WebProfilesLoading from '@javascript/components/pages/profiles/index/WebProfilesLoading';
import MobileProfilesLoading from '@javascript/components/pages/profiles/index/MobileProfilesLoading';

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
  const [loading, setLoading] = useState(true);
  const { profiles: creatorsPageData, pagination } =
    useContent<ProfilesProps>();

  // Single media query to determine layout
  const isDesktop = useMediaQuery(
    { query: '(min-width: 769px)' },
    undefined,
    (matches) => {
      // This callback prevents hydration mismatch by only using client-side media queries
      return matches;
    }
  );

  useEffect(() => {
    if (creatorsPageData && pagination) {
      // Add small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [creatorsPageData, pagination]);

  return (
    <>
      {loading ? (
        isDesktop ? (
          <WebProfilesLoading />
        ) : (
          <MobileProfilesLoading />
        )
      ) : isDesktop ? (
        <WebProfiles
          creatorsPageData={creatorsPageData}
          pageNumber={pagination?.page}
        />
      ) : (
        <MobileProfiles
          creatorsPageData={creatorsPageData}
          pageNumber={pagination?.page}
        />
      )}
    </>
  );
}
