import { FC } from 'react';
import StoresPageElement from './StoresPageElement';
import '~/styles/storesStyles/storesPageStyling.scss';

export interface StoresObj {
  name: string;
  slug: string;
  display_image: string;
}

export interface StoresPageProps {
  storesPageData?: StoresObj[];
}

const StoresPage: FC<StoresPageProps> = ({ storesPageData = [] }) => {
  return (
    <div className="storesPageLayoutWrapper">
      {storesPageData?.map((storesObj, index) => (
        <a key={index} href={`https://www.comix.one/stores/${storesObj.slug}`}>
          <StoresPageElement storesObj={storesObj} />
        </a>
      ))}
    </div>
  );
};

export default StoresPage;
