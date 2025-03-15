import React, { FC } from 'react';
import '@assets/stylesheets/newui/appMarketing.sass.scss';
// import marketingBackgroundImage from '../../../../assets/background/marketing-content-image copy.svg';
// import AppDownloadButtonSvg from 'assets/icons/AppDownloadButtonSvg';

const AppMarketing: FC = () => {
  return (
    <div
      className="appMarketingBackgroundWeb"
      role="region"
      aria-label="App Marketing Section"
    >
      <img
        // src={marketingBackgroundImage}
        alt="Background promoting the Comix One app"
        className="marketingBackgroundImage"
      />
      <a
        href="https://apps.apple.com/us/app/comix-one/id6566173476"
        target="_blank"
        rel="noopener noreferrer"
        className="appDownloadButton"
        aria-label="Download the Comix One app from the Apple App Store"
      >
        {/* <AppDownloadButtonSvg /> */}
      </a>
    </div>
  );
};

export default AppMarketing;
