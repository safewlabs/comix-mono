import React, { FC, useState } from 'react';
import { ComicsPageType } from './ComicsPageLayout';
import PriceTagIcon from '@assets/icons/price-tag-icon.svg';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
// import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';

export interface ComicCardProps {
  index: number;
  comicData: ComicsPageType;
}

const ComicsPageCard: FC<ComicCardProps> = ({ index, comicData }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      role="comic card"
      aria-labelledby={`comic-card-${index}`}
      className="newReleaseCard"
    >
      <img src={PriceTagIcon} alt="Price tag icon" className="priceTag" />
      <p className="priceAmount" aria-label={`Price: ${comicData.price}`}>
        {comicData.price}
      </p>
      <div className="imageWrapper">
        {!imageLoaded && <div className="shimmerLoader shimmerComicImage" />}
        <img
          className={`comicImage ${!imageLoaded ? 'hidden' : ''}`}
          src={`https://comix.one${comicData.avatar}`}
          alt={`${comicData.name} comic cover`}
          aria-describedby={`comic-name-${index}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="newReleaseNameAndStore">
        <p
          className="newReleaseName"
          id={`comic-name-${index}`}
          aria-label={`Comic name: ${comicData.name}`}
        >
          {comicData.name.length > 30
            ? `${comicData.name.toUpperCase().substring(0, 30)}...`
            : comicData.name.toUpperCase()}
        </p>
        <p className="newReleaseStore">{comicData.store_name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default ComicsPageCard;
