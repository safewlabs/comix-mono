import React, { FC, useState } from 'react';
import { StoresObj } from './layout/storesPage/StoresPage';
import EyeIcon from '@assets/icons/eye-icon.svg';

interface StoresPageElementProps {
  storesObj: StoresObj;
}

const StoresPageElement: FC<StoresPageElementProps> = ({ storesObj }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="storeImageAndName">
      <div className="imageContainer">
        <img
          className={`storeImage ${isLoaded ? '' : 'shimmerLoader'}`}
          src={`https://comix.one${storesObj.display_image}`}
          alt={`${storesObj.name}-image`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="eyeWithBackground">
          <img src={EyeIcon} alt="eye-icon" />
        </div>
      </div>
      <p className="storeName">{storesObj.name}</p>
    </div>
  );
};

export default StoresPageElement; 