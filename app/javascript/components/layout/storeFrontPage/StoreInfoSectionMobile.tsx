import React, { FC } from 'react';
import StoreInfoCardMobile from './StoreInfoCardMobile';
// import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageMobileStyles.sass.scss';
import AboutUsSection from './AboutUsSection';
import SocialFeedMobile from './SocialFeedMobile';

type StoreInfoSectionProps = {
  description: string;
};

const StoreInfoSectionMobile: FC<StoreInfoSectionProps> = ({ description }) => {
  return (
    <div className="infoSectionMobileWrapper">
      <StoreInfoCardMobile />
      <AboutUsSection description={description} />
      <SocialFeedMobile />
    </div>
  );
};

export default StoreInfoSectionMobile;
