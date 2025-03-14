import React from 'react';
import { FC } from 'react';
// import '~/styles/newReleasesStyles/newReleasesMobileStyles.scss';

interface TitleAndTaglineProps {
  title: string;
  tagline: string;
}

const TitleAndTaglineMobile: FC<TitleAndTaglineProps> = ({
  title,
  tagline,
}) => {
  return (
    <>
      <h1 className="titleMobile" aria-label="Main title">
        {title}
      </h1>
      <section className="taglineMobile" aria-labelledby="tagline-heading">
        <h2 id="tagline-heading" className="sr-only">
          Tagline Section
        </h2>
        <p>{tagline}</p>
      </section>
    </>
  );
};

export default TitleAndTaglineMobile;
