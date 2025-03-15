import React, { FC } from 'react';
import { ComixLogoSvg } from '@assets/logos/ComixLogoSvg';
import '@assets/stylesheets/newui/headerStyles/header.sass.scss';

const ComixHeaderLogo: FC = () => {
  return (
    <a href="/" aria-label="Home page">
      <button aria-label="Go to Home">
        <ComixLogoSvg className="headerLogo" alt={'Comix logo'} />
      </button>
    </a>
  );
};

export default ComixHeaderLogo;
