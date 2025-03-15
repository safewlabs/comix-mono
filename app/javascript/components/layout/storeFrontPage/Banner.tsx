import { FC } from 'react';
import '~/styles/storeFrontPageStyles/storeFrontPageWebStyles.scss';

type BannerProps = {
  image?: string;
};

const Banner: FC<BannerProps> = ({ image }) => {
  return (
    <div className="storeFrontWebWrapper">
      <img
        src={image && `https://www.comix.one${image}`}
        alt="Store Banner"
        className={image ? 'storeFrontWebImage' : 'storeFrontWebImageBlank'}
      />
    </div>
  );
};

export default Banner;
