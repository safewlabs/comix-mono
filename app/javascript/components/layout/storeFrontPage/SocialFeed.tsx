import React from 'react';
import '~/styles/storeFrontPageStyles/storeFrontPageWebStyles.scss';
import SocialFeedCarousel from './SocialFeedCarousel';
import OurWorkSection from './OurWorkSection';

const SocialFeed = () => {
  return (
    <div className="socialFeedAndOurWorkWrapper">
      {/* <SocialFeedCarousel /> */}
      <OurWorkSection />
    </div>
  );
};

export default SocialFeed;
