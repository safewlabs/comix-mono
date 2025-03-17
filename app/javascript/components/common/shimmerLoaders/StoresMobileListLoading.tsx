import React from 'react';
// import '@assets/stylesheets/newui/storesStyles/storesPageStyling.sass.scss';
// import '@assets/stylesheets/newui/storesStyles/storesPageMobile.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const storesArrayMobile = new Array(20).fill(null);

const StoresMobileListLoading = () => {
  return (
    <div className="storesMobileWrapper">
      {storesArrayMobile.map((index) => (
        <div
          key={`${index}-${crypto.randomUUID()}`}
          className="storeImageAndName"
        >
          <img className="storeImage shimmerLoader" />
          <div className="storeNameLoading shimmerLoader"></div>
        </div>
      ))}
    </div>
  );
};

export default StoresMobileListLoading;
