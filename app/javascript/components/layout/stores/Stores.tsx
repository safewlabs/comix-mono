import { FC } from 'react';
import Tagline from '~/components/common/Tagline';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import StoresCard from './StoresCard';
import '~/styles/storesStyles/stores.scss';

export interface StoreTypes {
  name: string;
  issue_cover: string;
  slug: string;
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
                storeImage={storeData.issue_cover}
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
