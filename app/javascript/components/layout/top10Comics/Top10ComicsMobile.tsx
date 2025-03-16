// import '@assets/stylesheets/newui/top10ComicsStyles/top10ComicsMobileStyles.sass.scss';
import React, { FC } from 'react';
import { Top10Comics } from './Top10Comics';
import ComicCardMobile from '../newReleases/ComicCardMobile';
import Button from '@javascript/components/common/Button';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';

const Top10ComicsMobile: FC<Top10Comics> = ({ top10Comics }) => {
  return (
    <div className="top10ComicsMobileWrapper">
      <TitleAndTaglineMobile
        title="TOP 10 COMICS"
        tagline="See The Hottest Comics That Everyone's Talking About"
      />
      <div>
        <div className="cardGroupMobile">
          {top10Comics.map((comic, index) => (
            <div className="cardParentMobile" key={index}>
              <div className="top10RankNumberMobile">
                <p className="number">{index + 1}</p>
              </div>
              <ComicCardMobile index={index} comicData={comic} />
            </div>
          ))}
        </div>
      </div>
      <Button routeText={'/'} buttonText="VIEW ALL" />
    </div>
  );
};

export default Top10ComicsMobile;
