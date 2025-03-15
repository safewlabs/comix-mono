import { FC } from 'react';
import { featuredOnDummyData } from './FeaturedOn';
import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import '~/styles/featuredOnStyles/featuredOnMobileStyles.scss';
import '~/styles/featuredOnStyles/featuredOn.scss';

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
