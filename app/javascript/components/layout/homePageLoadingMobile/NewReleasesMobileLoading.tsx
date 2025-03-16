import React from 'react';
import Edge from '@assets/background/new-releases-lavender-background-edge.svg';
import Button from '@javascript/components/common/Button';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';
// import '@assets/stylesheets/newui/newReleasesStyles/newReleasesMobileStyles.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummyList = new Array(12).fill(null);

const NewReleasesMobileLoading = () => {
  return (
    <div className="newReleasesMobileWrapper">
      <img src={Edge} alt="edge" className="edge" />
      <div className="newReleasesMobileBackground">
        <TitleAndTaglineMobile
          title="NEW RELEASES"
          tagline="See The Hottest Comics That Everyone’s Talking About."
        />
        <div>
          {dummyList.map((index) => (
            <div className="cardGroup" key={`${crypto.randomUUID()}-${index}`}>
              <div className="newReleaseMobileCard shimmerLoaderPurple"></div>
            </div>
          ))}
        </div>
        <Button routeText={'/comics'} buttonText={'VIEW ALL'} />
      </div>
    </div>
  );
};

export default NewReleasesMobileLoading;
