import React from 'react';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsPageStyles.sass.scss';

const dummyCreators = new Array(20).fill(null);

const CreatorsListLoading = () => {
  return (
    <div className="creatorsPageLayoutWrapperWeb">
      <aside
        className="shimmerFilterCreatorsPage shimmerLoader"
        aria-labelledby="filters loading"
      ></aside>
      <div className="creatorsPageListWrapperWeb">
        {dummyCreators.map((index) => (
          <div
            key={`${crypto.randomUUID()}-${index}`}
            className="shimmerCreatorCard"
          >
            <div className="shimmerLoader shimmerCreatorImage"></div>
            <div className="shimmerCreatorNameAndSkills">
              <div className="shimmerLoader shimmerCreatorName"></div>
              <div className="shimmerLoader shimmerCreatorSkills"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsListLoading;
