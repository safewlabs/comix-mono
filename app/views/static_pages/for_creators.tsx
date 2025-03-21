import React, { useState, useEffect } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import ForCreatorsWebLoading from '@javascript/components/pages/for_creators/ForCreatorsWebLoading';
import ForCreatorsMobileLoading from '@javascript/components/pages/for_creators/ForCreatorsMobileLoading';
import ForCreatorsWeb from '@javascript/components/pages/for_creators/ForCreatorsWeb';
import ForCreatorsMobile from '@javascript/components/pages/for_creators/ForCreatorsMobile';

type StaticPagesProps = {
  static_pages: {
    title: string;
  };
};

export default function ForCreators() {
  const [loading, setLoading] = useState<boolean>(true);
  const { static_pages } = useContent<StaticPagesProps>();
  const { title } = static_pages;
  console.log(title);
  const isDesktop = useMediaQuery(
    { query: '(min-width: 769px)' },
    undefined,
    (matches) => {
      return matches;
    }
  );

  useEffect(() => {
    if (static_pages) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [static_pages]);

  return (
    <>
      {loading ? (
        isDesktop ? (
          <ForCreatorsWebLoading />
        ) : (
          <ForCreatorsMobileLoading />
        )
      ) : isDesktop ? (
        <ForCreatorsWeb />
      ) : (
        <ForCreatorsMobile />
      )}
    </>
  );
}
