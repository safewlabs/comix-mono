import React, { FC } from 'react';
import { ComicData } from './NewReleases';
import PriceTagIcon from '@assets/icons/price-tag-icon.svg';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';

export interface ComicCardProps {
  index: number;
  comicData: ComicData;
}

const ComicCard: FC<ComicCardProps> = ({ index, comicData }) => {
  return (
    <div>
      <div key={index} className="newReleaseCard">
        <div className="newReleaseNameAndStore">
          <p className="newReleaseName">
            {comicData.name.length > 20
              ? `${comicData.name.substring(0, 20)}...`
              : comicData.name}
          </p>
          <p className="newReleaseStore">
            {comicData.store_name.toUpperCase()}
          </p>
        </div>
        <img src={PriceTagIcon} alt="price-tag" className="priceTag"></img>
        <p className="priceAmount">${comicData.price}</p>
        <img
          className="comicImage"
          src={`https://comix.one${comicData.issue_cover}`}
          alt={comicData.name}
        />
      </div>
    </div>
  );
};

export default ComicCard;
