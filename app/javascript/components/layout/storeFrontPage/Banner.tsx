import React, { FC } from 'react';
// import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageWebStyles.sass.scss';

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
