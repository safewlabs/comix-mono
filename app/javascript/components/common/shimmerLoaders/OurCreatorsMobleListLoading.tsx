import React from 'react';
// import '~/styles/creatorsStyles/ourCreatorsMobileStyles.scss';
// import '~/styles/shimmerLoader.scss';

const dummyCreatorsList = new Array(20).fill(null);

const OurCreatorsMobleListLoading = () => {
  return (
    <div className="creatorsPageLayoutWrapperMobile">
      {dummyCreatorsList.map((index) => (
        <div key={`${index}-${crypto.randomUUID()}`} className="creatorCard">
          <img className="creatorImage shimmerLoader" />
          <div className="creatorNameLoading shimmerLoader"></div>
          <div className="creatorSkillsLoading shimmerLoader"></div>
          <div className="creatorSkillsLoading shimmerLoader"></div>
        </div>
      ))}
    </div>
  );
};

export default OurCreatorsMobleListLoading;
