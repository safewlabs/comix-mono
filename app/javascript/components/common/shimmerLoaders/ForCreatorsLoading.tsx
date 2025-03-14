import React from 'react';
import { TEXT } from '~/components/layout/forCreatorsPage/ForCreatorsPage';
// import '~/styles/creatorsStyles/forCreatorsPageStyles.scss';
// import '~/styles/shimmerLoader.scss';

export const ForCreatorsLoading = () => {
  return (
    <div className="forCreatorsPageLayoutWrapper">
      <p className="forCreatorsPageTitle">FOR CREATORS</p>
      <div className="cardContainerShimmer shimmerLoader"></div>
      <p className="forCreatorsPageText">{TEXT.toUpperCase()}</p>
      <div className="airtableEmbed shimmerLoader"></div>
    </div>
  );
};

export const ForCreatorsLoadingMobile = () => {
  return (
    <div className="forCreatorsPageLayoutWrapper">
      <p className="forCreatorsPageTitle">FOR CREATORS</p>
      <div className="cardContainerMobileShimmer shimmerLoader"></div>
      <p className="forCreatorsPageText">{TEXT.toUpperCase()}</p>
      <div className="airtableEmbed shimmerLoader"></div>
    </div>
  );
};
