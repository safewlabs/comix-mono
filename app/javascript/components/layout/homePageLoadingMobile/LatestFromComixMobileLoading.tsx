import React from 'react';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
import '@assets/stylesheets/newui/latestStyles/latestFromComix.scss';
import '@assets/stylesheets/newui/latestStyles/latestFromComixMobileStyles.scss';
import '@assets/stylesheets/newui/shimmerLoader.scss';

const dummyList = new Array(3).fill(null);

const LatestFromComixMobileLoading = () => {
  return (
    <div className="latestComixMobileWrapper">
      <TitleAndTaglineMobile
        title="LATEST FROM COMIX"
        tagline="Explore Our Newest Articles, Interviews, And Updates From The Vibrant Universe Of Comix!"
      />
      <div className="cardGroupMobile">
        {dummyList.map((index) => (
          <div
            key={`${crypto.randomUUID()}-${index}`}
            className="latestFromComixCard shimmerLoader"
          ></div>
        ))}
      </div>
      <Button routeText={'/'} buttonText={'EXPLORE ALL'} />
    </div>
  );
};

export default LatestFromComixMobileLoading;
