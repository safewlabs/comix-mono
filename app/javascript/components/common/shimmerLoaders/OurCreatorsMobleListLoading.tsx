import React from 'react';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
// import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsMobileStyles.sass.scss';

const dummyCreatorsList = new Array(20).fill(null);

const OurCreatorsMobleListLoading = () => {
  return (
    <div className="creatorsPageLayoutWrapperMobile">
      {dummyCreatorsList.map((index) => (
        <div key={`${index}-${crypto.randomUUID()}`} className="creatorCardMobile">
          <img className="creatorImageMobile shimmerLoader" />
          <div className="creatorNameLoading shimmerLoader"></div>
          <div className="creatorSkillsLoading shimmerLoader"></div>
          <div className="creatorSkillsLoading shimmerLoader"></div>
        </div>
      ))}
    </div>
  );
};

export default OurCreatorsMobleListLoading;
