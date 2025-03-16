import React from 'react';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import Tagline from '@javascript/components/common/Tagline';
// import '@assets/stylesheets/newui/creatorsStyles/creators.sass.scss';

const dummyList = new Array(12).fill(null);

const CreatorSectionLoadingWeb = () => {
  return (
    <div className="creatorsSectionWrapper">
      <div className="titleAndButtons">
        <TitleAndButtons
          routeText={'/creators'}
          title={'CREATORS'}
          buttonText={'VIEW ALL'}
        />
      </div>
      <Tagline tagline={'Meet The Creators Behind Your Favorite Comics.'} />
      <div className="creatorsWrapper">
        {dummyList.map((index) => (
          <div key={index} className="creatorImageNameAndTitle">
            <div className="creatorImage shimmerLoader"></div>
            <div className="creatorSectionNameShimmer shimmerLoader"></div>
            <div className="creatorSectionSkillsShimmer shimmerLoader"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorSectionLoadingWeb;
