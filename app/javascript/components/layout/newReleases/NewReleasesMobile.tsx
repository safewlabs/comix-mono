import React, { FC } from 'react';
import Edge from '@assets/background/new-releases-lavender-background-edge.svg';
import ComicCardMobile from './ComicCardMobile';
import Button from '@javascript/components/common/Button';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import { ProductType } from '@javascript/types/applicationTypes';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleasesMobileStyles.sass.scss';

export interface ComicData {
  name: string;
  store_name: string;
  price: string;
  slug: string;
  created_at: string;
  issue_cover: string;
}

export interface NewReleasesProps {
  // newReleases: ComicData[];
  new_releases: ProductType[];
}

const NewReleasesMobile: FC<NewReleasesProps> = ({ new_releases = [] }) => {
  return (
    <div className="newReleasesMobileWrapper">
      <img src={Edge} alt="edge" className="edge" />
      <div className="newReleasesMobileBackground">
        <TitleAndTaglineMobile
          title="NEW RELEASES"
          tagline="See The Hottest Comics That Everyone’s Talking About."
        />
        <div>
          {new_releases.map((newRelease, index) => (
            <div className="cardGroup" key={index}>
              <ComicCardMobile index={index} comicData={newRelease} />
            </div>
          ))}
        </div>
        <Button routeText={'/comics'} buttonText={'VIEW ALL'} />
      </div>
    </div>
  );
};

export default NewReleasesMobile;
