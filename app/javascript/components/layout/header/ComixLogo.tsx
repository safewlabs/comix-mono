import { FC } from 'react';
import { ComixLogoSvg } from 'assets/logos/ComixLogoSvg';
import '~/styles/headerStyles/header.scss';

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
