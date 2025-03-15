import React, { FC } from 'react';
import { ComicsPageType } from './ComicsPageLayout';
import PriceTagIcon from '@assets/icons/price-tag-icon.svg';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPageMobile.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

export interface ComicCardProps {
  index: number;
  comicData: ComicsPageType;
}

const ComicsPageCardMobile: FC<ComicCardProps> = ({ index, comicData }) => {
  return (
    <div
      role="article"
      aria-labelledby={`comic-card-${index}`}
      className="newReleaseCardMobile"
    >
      <img src={PriceTagIcon} alt="Price tag icon" className="priceTagMobile" />
      <p className="priceAmountMobile" aria-label={`Price: ${comicData.price}`}>
        {comicData.price}
      </p>
      <img
        className="comicImageMobile shimmerLoader"
        src={`https://comix.one${comicData.avatar}`}
        alt={`${comicData.name} comic cover`}
        aria-describedby={`comic-name-${index}`}
      />
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

export default ComicsPageCardMobile;
