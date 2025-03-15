import { FC } from 'react';
import '~/styles/storeFrontPageStyles/storeFrontPageMobileStyles.scss';

type BannerProps = {
  image?: string;
};

const BannerMobile: FC<BannerProps> = ({ image }) => {
  return (
    <div className="storeFrontMobileWrapper">
      {image ? (
        <img
          src={`https://www.comix.one${image}`}
          alt="Store Banner"
          className={'storeFrontMobileImage'}
        />
      ) : (
        <div className="storeFrontMobileImageBlank"></div>
      )}
    </div>
  );
};

export default BannerMobile;
