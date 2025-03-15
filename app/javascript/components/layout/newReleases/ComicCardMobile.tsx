import React, { FC } from 'react';
import { ComicData } from './NewReleases';
import PriceTagIcon from '@assets/icons/price-tag-icon.svg';
import '@assets/stylesheets/newui/newReleasesStyles/newReleasesMobileStyles.scss';

export interface ComicCardProps {
  index: number;
  comicData: ComicData;
}

const ComicCardMobile: FC<ComicCardProps> = ({ index, comicData }) => {
  return (
    <div>
      <div key={index} className="newReleaseMobileCard">
        <div className="newReleaseNameAndStoreMobile">
          <p className="newReleaseNameMobile">
            {comicData.name.length > 30
              ? `${comicData.name.substring(0, 20)}...`
              : comicData.name}
          </p>
          <p className="newReleaseStoreMobile">
            {comicData.store_name.toUpperCase()}
          </p>
        </div>
        <img
          src={PriceTagIcon}
          alt="price-tag"
          className="priceTagMobile"
        ></img>
        <p className="priceAmountMobile">${comicData.price}</p>
        <img
          className="comicMobileImage"
          src={`https://comix.one${comicData.issue_cover}`}
          alt={comicData.name}
        />
      </div>
    </div>
  );
};

export default ComicCardMobile;
