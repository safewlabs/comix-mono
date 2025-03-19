import React, { FC } from 'react';
import Tagline from '@javascript/components/common/Tagline';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import StoresCard from './StoresCard';
// // import '@assets/stylesheets/newui/storesStyles/stores.sass.scss';

export interface StoreTypes {
  name: string;
  slug: string;
  display_image?: string;
}

export interface StoresProps {
  storesData: StoreTypes[];
}

const Stores: FC<StoresProps> = ({ storesData }) => {
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
        {storesData.map((storeData, index) => (
          <a
            href={`https://www.comix.one/stores/${storeData.slug}`}
            key={index}
          >
            <div>
              <StoresCard
                storeImage={storeData.display_image || ''}
                storeTitle={storeData.name}
                storeSlug={storeData.slug}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Stores;
