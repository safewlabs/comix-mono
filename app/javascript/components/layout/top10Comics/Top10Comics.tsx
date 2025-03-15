import { FC, useRef } from 'react';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import ComicCard from '../newReleases/ComicCard';
import { handleScroll } from '~/components/common/handleScroll';
import Tagline from '~/components/common/Tagline';
import '~/styles/titleAndButtons.scss';
import '~/styles/top10ComicsStyles/top10Comics.scss';

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
            onBack={() => handleScroll(top10ComicsWrapperRef, 'left')}
            onForward={() => handleScroll(top10ComicsWrapperRef, 'right')}
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
