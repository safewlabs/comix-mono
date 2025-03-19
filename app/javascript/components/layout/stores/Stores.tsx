import React, { FC } from 'react';
import Tagline from '@javascript/components/common/Tagline';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import StoresCard from './StoresCard';
import { StoreType } from '@javascript/types/applicationTypes';
// // import '@assets/stylesheets/newui/storesStyles/stores.sass.scss';

// export interface StoreTypes {
//   name: string;
//   issue_cover: string;
//   slug: string;
// }

export interface StoresProps {
  // storesData: StoreTypes[];
  random_stores: StoreType[];
}

const Stores: FC<StoresProps> = ({ random_stores }) => {
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
        {random_stores.map((storeData, index) => (
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
