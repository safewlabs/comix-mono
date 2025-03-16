import React from 'react';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
// import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageWebStyles.sass.scss';

const StoreInfoCardLoading = () => {
  return (
    <div className="storeInfoCardWrapper">
      <div className="storeInfoCard">
        <div className="storeImageLoading shimmerLoader" />
        <div className="storeInfo">
          <div className="storeInfoTitleLoading shimmerLoader"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoCardLoading;
