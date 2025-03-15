import React, { FC } from 'react';
import '@assets/stylesheets/newui/storesStyles/stores.sass.scss';

interface StoreCardProps {
  storeImage: string;
  storeTitle: string;
  storeSlug: string;
}
const StoresCard: FC<StoreCardProps> = ({
  storeImage,
  storeTitle,
  storeSlug,
}) => {
  return (
    <div className="storeCard">
      <img
        src={`https://comix.one${storeImage}`}
        alt={storeSlug}
        className="storeImage"
      />
      <p className="storeTitle">{storeTitle}</p>
    </div>
  );
};

export default StoresCard;
