import React from 'react';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';

const dummyList = new Array(6).fill(null);

const OurWorkSectionLoading = () => {
  return (
    <div className="ourWorkSectionWrapper">
      <div className="ourWorkTitle">OUR WORK</div>
      <div className="ourWorkListWrapper">
        {dummyList.map((index) => (
          <div key={`${index}-${crypto.randomUUID()}`} className="storeFrontCard">
            <div className="comicImage shimmerLoader"></div>
            <div className="shimmerLoader newReleaseNameLoading"></div>
            <div className="shimmerLoader newReleaseStoreLoading"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkSectionLoading;
