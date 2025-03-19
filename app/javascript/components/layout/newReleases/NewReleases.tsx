import React, { FC, useRef } from 'react';
import Edge from '@assets/background/new-releases-lavender-background-edge.svg';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import Tagline from '@javascript/components/common/Tagline';
import { handleScroll } from '@javascript/components/common/handleScroll';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import ComicCard from './ComicCard';
import { ProductType } from '@javascript/types/applicationTypes';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';
// import '@assets/stylesheets/newui/titleAndButtons.sass.scss';

export interface ComicData {
  name: string;
  store_name: string;
  price: string;
  slug: string;
  created_at: string;
  issue_cover: string;
}

export interface NewReleasesProps {
  // new_releases: ComicData[];
  new_releases: ProductType[];
}

const NewReleases: FC<NewReleasesProps> = ({ new_releases = [] }) => {
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
              onBack={() =>
                listWrapperRef.current &&
                handleScroll({ current: listWrapperRef.current }, 'left')
              }
              onForward={() =>
                listWrapperRef.current &&
                handleScroll({ current: listWrapperRef.current }, 'right')
              }
            />
          </div>
        </div>
        <Tagline
          tagline={'See The Hottest Comics That Everyone’s Talking About.'}
        />
        <div className="newReleasesListWrapperOne" ref={listWrapperRef}>
          {new_releases.map((newRelease, index) => (
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
