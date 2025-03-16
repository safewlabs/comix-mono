import React, { FC, useRef } from 'react';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import BackAndForwardButtons from '@javascript/components/common/BackAndForwardButtons';
import ComicCard from '../newReleases/ComicCard';
import { handleScroll } from '@javascript/components/common/handleScroll';
import Tagline from '@javascript/components/common/Tagline';
import '@assets/stylesheets/newui/titleAndButtons.sass.scss';
import '@assets/stylesheets/newui/top10ComicsStyles/top10Comics.sass.scss';

export interface Top10Comic {
  name: string;
  store_name: string;
  price: string;
  slug: string;
  created_at: string;
  issue_cover: string;
}
export interface Top10Comics {
  top10Comics: Top10Comic[];
}

const Top10Comics: FC<Top10Comics> = ({ top10Comics }) => {
  const top10ComicsWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div className="top10ComicsWrapperWeb">
      <div className="titlesAndButtonsWrapperTwo">
        <TitleAndButtons
          routeText={'/'}
          title={'TOP 10 COMICS'}
          buttonText={'VIEW ALL'}
        />
        <div className="titleAndButtons">
          <BackAndForwardButtons
            onBack={() => top10ComicsWrapperRef.current && handleScroll({current : top10ComicsWrapperRef.current}, 'left')}
            onForward={() => top10ComicsWrapperRef.current && handleScroll({current: top10ComicsWrapperRef.current}, 'right')}
          />
        </div>
      </div>
      <Tagline
        tagline={' See The Hottest Comics That Everyone’s Talking About.'}
      />
      <div className="top10ComicsListWrapperWeb" ref={top10ComicsWrapperRef}>
        {top10Comics.map((comic, index) => (
          <a href={`https://www.comix.one/products/${comic.slug}`} key={index}>
            <div className="cardParentWeb">
              <div className="top10RankNumberWeb">
                <p className="number">{index + 1}</p>
              </div>
              <ComicCard index={index} comicData={comic} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Top10Comics;
