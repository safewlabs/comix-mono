import React from 'react';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
import '@assets/stylesheets/newui/storesStyles/storesMobile.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/storesStyles/stores.sass.scss';

const dummyList = new Array(14).fill(null);

const StoresMobileLoading = () => {
  return (
    <div className="storesWrapperMobile">
      <TitleAndTaglineMobile
        title="STORES"
        tagline="Browse And Support Comics Merchandise."
      />
      <div className="storesListTwo">
        {dummyList.map((index) => (
          <div key={`${crypto.randomUUID()}-${index}`}>
            <div className="storeCard">
              <div className="storeImage shimmerLoader"></div>
              <div className="storeTitleShimmerLoader shimmerLoader"></div>
            </div>
          </div>
        ))}
      </div>
      <Button routeText={'/stores'} buttonText="VIEW ALL" />
    </div>
  );
};

export default StoresMobileLoading;
