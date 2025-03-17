import React, { FC } from 'react';
// // import '@assets/stylesheets/newui/storesStyles/storesPageMobile.sass.scss';
import StoresPageElement from './StoresPageElement';

interface StoreDataObj {
  display_image: string;
  name: string;
  slug: string;
}

interface PaginatedDataObj {
  count: number;
  next: number;
  next_url: string;
  page: number;
  prev_url: string;
}

interface StoreDataMobile {
  data: StoreDataObj[];
  pagination: PaginatedDataObj;
}

interface StoresPageMobileProps {
  storesPageData: StoreDataMobile;
}

const StoresPageMobile: FC<StoresPageMobileProps> = ({ storesPageData }) => {
  return (
    <div className="storesMobileWrapper">
      {storesPageData.data.map((storesObj, index) => (
        <div key={index}>
          <a
            key={index}
            href={`https://www.comix.one/stores/${storesObj.slug}`}
          >
            <StoresPageElement storesObj={storesObj} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default StoresPageMobile;
