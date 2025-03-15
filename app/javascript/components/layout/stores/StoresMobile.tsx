import { FC } from 'react';
import { StoresProps } from './Stores';
import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import StoresCard from './StoresCard';
import Button from '~/components/common/Button';
import '~/styles/storesStyles/storesMobile.scss';

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
