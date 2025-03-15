import React, { FC } from 'react';
import '@assets/stylesheets/newui/webApp.sass.scss';

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
