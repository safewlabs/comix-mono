import React from 'react';
// import '@assets/stylesheets/newui/storesStyles/storesPageStyling.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummyStores = new Array(20).fill(null);

const StoresPageListLoading = () => {
  return (
    <div className="storesPageLayoutWrapper">
      {dummyStores.map(() => (
        <div className="storeImageAndName" key={crypto.randomUUID()}>
          <div className="shimmerStoreImage shimmerLoader"></div>
          <div className="shimmerStoreName shimmerLoader"></div>
        </div>
      ))}
    </div>
  );
};

export default StoresPageListLoading;
