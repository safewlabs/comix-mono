import { FC, useRef } from 'react';
import Edge from '../../../../assets/background/new-releases-lavender-background-edge.svg';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import { handleScroll } from '~/components/common/handleScroll';
import ComicCard from './ComicCard';
import Tagline from '~/components/common/Tagline';
import '~/styles/newReleasesStyles/newReleases.scss';
import '~/styles/titleAndButtons.scss';

export interface ComicData {
  name: string;
  store_name: string;
  price: string;
  slug: string;
  created_at: string;
  issue_cover: string;
}

export interface NewReleasesProps {
  newReleases: ComicData[];
}

const NewReleases: FC<NewReleasesProps> = ({ newReleases = [] }) => {
  const listWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div className="newReleasesWrapperOne">
      <img src={Edge} alt="edge" className="edgeOne" />
      <div className="newReleasesBackgroundOne">
        <div className="titlesAndButtonsWrapperOne">
          <TitleAndButtons
            routeText={'/comics'}
            title={'NEW RELEASES'}
            buttonText={'VIEW ALL'}
          />
          <div className="titleAndButtonsCommon">
            <BackAndForwardButtons
              onBack={() => handleScroll(listWrapperRef, 'left')}
              onForward={() => handleScroll(listWrapperRef, 'right')}
            />
          </div>
        </div>
        <Tagline
          tagline={'See The Hottest Comics That Everyone’s Talking About.'}
        />
        <div className="newReleasesListWrapperOne" ref={listWrapperRef}>
          {newReleases.map((newRelease, index) => (
            <a
              href={`https://www.comix.one/products/${newRelease.slug}`}
              key={index}
            >
              <ComicCard index={index} comicData={newRelease} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
