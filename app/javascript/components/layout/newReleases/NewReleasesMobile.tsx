import React, { FC } from 'react';
import Edge from '@assets/background/new-releases-lavender-background-edge.svg';
import ComicCardMobile from './ComicCardMobile';
import Button from '@javascript/components/common/Button';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';
import '@assets/stylesheets/newui/newReleasesStyles/newReleasesMobileStyles.sass.scss';

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

const NewReleasesMobile: FC<NewReleasesProps> = ({ newReleases = [] }) => {
  return (
    <div className="newReleasesMobileWrapper">
      <img src={Edge} alt="edge" className="edge" />
      <div className="newReleasesMobileBackground">
        <TitleAndTaglineMobile
          title="NEW RELEASES"
          tagline="See The Hottest Comics That Everyone’s Talking About."
        />
        <div>
          {newReleases.map((newRelease, index) => (
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
