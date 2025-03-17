import React from 'react';
// import '@assets/stylesheets/newui/storesStyles/stores.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import Tagline from '@javascript/components/common/Tagline';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';

const dummyList = new Array(20).fill(null);

const StoresLoadingWeb = () => {
  return (
    <div className="storesWrapperOne">
      <div className="titleButtonsFour">
        <TitleAndButtons
          routeText={'/stores'}
          title={'STORES'}
          buttonText={'VIEW ALL'}
        />
      </div>
      <Tagline tagline={'Browse And Support Comics And Merchandise.'} />
      <div className="storesListOne">
        {dummyList.map((index) => (
          <div key={index}>
            <div className="storeCardShimmer shimmerLoader"></div>
            <div className="storeTitleShimmer shimmerLoader"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresLoadingWeb;
