import React from 'react';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
// import '@assets/stylesheets/newui/creatorsStyles/creatorsMobile.sass.scss';
// import '@assets/stylesheets/newui/creatorsStyles/creators.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummyList = new Array(6).fill(null);

const CreatorsMobileLoading = () => {
  return (
    <div className="creatorsMobileWrapper">
      <TitleAndTaglineMobile
        title="CREATORS"
        tagline="Empowering Creators To Showcase, Sell, And Connect With Their Audience Like Never Before."
      />
      <div className="creatorsList">
        {dummyList.map((index) => (
          <div className="creatorImageNameAndTitle" key={index}>
            <div className="creatorImage shimmerLoader"></div>
            <div className="creatorSectionNameShimmerMobile shimmerLoader"></div>
            <div className="creatorSectionSkillsShimmerMobile shimmerLoader"></div>
          </div>
        ))}
      </div>
      <Button routeText={'/publish'} buttonText="JOIN US AS A CREATOR" />
    </div>
  );
};

export default CreatorsMobileLoading;
