import React from 'react';
import '@assets/stylesheets/newui/latestStyles/latestFromComix.scss';
import Tagline from '@javascript/components/common/Tagline';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';

const dummyList = new Array(3).fill(null);

const LatestFromComixLoadingWeb = () => {
  return (
    <div className="latestFromComixWrapper">
      <div className="titleButtons">
        <TitleAndButtons
          routeText={'/'}
          title={'LATEST FROM COMIX'}
          buttonText={'EXPLORE ALL'}
        />
      </div>
      <Tagline
        tagline={
          'Explore Our Newest Articles, Interviews, And Updates From The Vibrant Universe Of Comix!'
        }
      />
      <div className="latestFromComixList">
        {dummyList.map((index) => (
          <div
            className="latestFromComixCard shimmerLoader"
            key={`${index}-${crypto.randomUUID()}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LatestFromComixLoadingWeb;
