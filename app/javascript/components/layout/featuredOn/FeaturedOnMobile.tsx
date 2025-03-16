import React, { FC } from 'react';
import { featuredOnDummyData } from './FeaturedOn';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
// import '@assets/stylesheets/newui/featuredOnStyles/featuredOnMobileStyles.sass.scss';
// import '@assets/stylesheets/newui/featuredOnStyles/featuredOn.sass.scss';

const FeaturedOnMobile: FC = () => {
  return (
    <div className="featuredOnMobileWrapper">
      <TitleAndTaglineMobile
        title="FEATURED ON"
        tagline="Explore Comics Featured Across Various Platforms."
      />
      <div>
        <div className="featuresMobileGroup">
          {featuredOnDummyData.map((featured, index) => (
            <div
              key={index}
              className="imageAndTitle"
              onClick={() => window.open(featured.url, '_blank')}
            >
              <img src={featured.image} alt={featured.name} className="image" />
              <p className="name">{featured.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOnMobile;
