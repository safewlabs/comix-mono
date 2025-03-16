import React from 'react';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
// import '@assets/stylesheets/newui/creatorsStyles/forCreatorsPageStyles.sass.scss';
import { TEXT } from '@javascript/components/layout/forCreatorsPage/ForCreatorsPage';

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
