import React from 'react';
import { FC } from 'react';
// import '~/styles/webApp.scss';

interface TaglineProp {
  tagline: string;
}
const Tagline: FC<TaglineProp> = ({ tagline }) => {
  return (
    <p
      className="applicationTagline"
      role="contentinfo"
      aria-label="Application tagline"
    >
      {tagline}
    </p>
  );
};

export default Tagline;
