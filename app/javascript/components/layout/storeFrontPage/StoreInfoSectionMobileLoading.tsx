import React from 'react';
import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageMobileStyles.sass.scss';
import StoreInfoCardMobileLoading from './StoreInfoCardMobileLoading';
import AboutUsSectionLoading from './AboutUsSectionLoading';
import SocialFeedMobileLoading from './SocialFeedMobileLoading';

const StoreInfoSectionMobileLoading = () => {
  return (
    <div className="infoSectionMobileWrapper">
      <StoreInfoCardMobileLoading />
      <AboutUsSectionLoading />
      <SocialFeedMobileLoading />
    </div>
  );
};

export default StoreInfoSectionMobileLoading;
