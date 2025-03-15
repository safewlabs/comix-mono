import { FC } from 'react';
import ComixLogo from '../../../../assets/logos/Comix Logo.svg';
import '~/styles/headerStyles/headerMobile.scss';

const ComixHeaderMobileLogo: FC = () => {
  return (
    <a href="/" aria-label="Home page">
      <button type="button" aria-label="Go to homepage">
        <img src={ComixLogo} alt="Comix Logo" className="headerMobileLogo" />
      </button>
    </a>
  );
};

export default ComixHeaderMobileLogo;
