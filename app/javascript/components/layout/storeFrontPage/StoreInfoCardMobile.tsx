import React from 'react';
import { storePageData } from '~/utils/dummyData/storePageData';
import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageMobileStyles.sass.scss';

const StoreInfoCardMobile = () => {
  return (
    <div className="storeInfoMobileCardWrapper">
      <div className="storeInfoMobileCard">
        <img
          src={`https://www.comix.one${storePageData.data.display_image}`}
          alt="Store Image"
          className="storeImageMobile"
        />
        <div className="storeInfoMobile">
          <div className="storeInfoTitleMobile">
            {storePageData.data.name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoCardMobile;
