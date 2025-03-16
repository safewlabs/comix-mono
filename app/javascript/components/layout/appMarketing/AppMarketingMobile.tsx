import React, { FC } from 'react';
// import '@assets/stylesheets/newui/appMarketing.sass.scss';
import appDownloadButton from '@assets/icons/app-download-button.svg';
import marketingBackgroundMobileImage from '@assets/background/marketing-content-image-mobile.svg';
import qrCodeGraphic from '@assets/background/qr-code-graphic-mobile.svg';

const AppMarketingMobile: FC = () => {
  return (
    <div
      className="appMarketingBackgroundMobile"
      role="region"
      aria-label="Mobile App Marketing Section"
    >
      <img
        src={marketingBackgroundMobileImage}
        alt="Background promoting the Comix One mobile app"
        className="marketingBackgroundMobileImage"
      />
      <div className="qrCodeAndButton">
        <img
          src={qrCodeGraphic}
          alt="Scan this QR code to download the Comix One app"
          className="qrCodeImage"
        />
        <a
          href="https://apps.apple.com/us/app/comix-one/id6566173476"
          target="_blank"
          rel="noopener noreferrer"
          className="appDownloadButtonMobile"
          aria-label="Download the Comix One app from the Apple App Store"
        >
          <img src={appDownloadButton} alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppMarketingMobile;
