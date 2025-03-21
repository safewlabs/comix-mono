import React, { FC } from 'react';
import { StoresProps } from './Stores';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
import StoresCard from './StoresCard';
// import '@assets/stylesheets/newui/storesStyles/storesMobile.sass.scss';

const StoresMobile: FC<StoresProps> = ({ storesData }) => {
  return (
    <div className="storesWrapperMobile">
      <TitleAndTaglineMobile
        title="STORES"
        tagline="Browse And Support Comics Merchandise."
      />
      <div className="storesListTwo">
        {storesData.map((storeData, index) => (
          <div key={index}>
            <StoresCard
              storeImage={storeData.issue_cover}
              storeTitle={storeData.name}
              storeSlug={storeData.slug}
            />
          </div>
        ))}
      </div>
      <Button routeText={'/stores'} buttonText="VIEW ALL" />
    </div>
  );
};

export default StoresMobile;
