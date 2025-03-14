import React from 'react';
// import '~/styles/storesStyles/storesPageStyling.scss';
// import '~/styles/storesStyles/storesPageMobile.scss';
// import '~/styles/shimmerLoader.scss';

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
