import React from 'react';
import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageMobileStyles.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.scss';

const StoreInfoCardMobileLoading = () => {
  return (
    <div className="storeInfoMobileCardWrapper">
      <div className="storeInfoMobileCard">
        <div className="storeImageMobile shimmerLoader" />
        <div className="storeInfoMobile">
          <div className="storeInfoTitleMobileLoading shimmerLoader"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoCardMobileLoading;
