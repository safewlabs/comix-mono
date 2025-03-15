import React, { FC } from 'react';
import ProgressBar from './ProgressBar';
import '@assets/stylesheets/newui/mainSection.scss';

const MainSection: FC = () => {
  return (
    <div className="mainSectionBackground">
      <div className="mainSectionWrapper"></div>
      <div className="taglineAndProgressBar">
        <p className="taglineMain">
          THE BEST PLACE TO BUY COMICS BY INDIE CREATORS
        </p>
        <ProgressBar />
      </div>
    </div>
  );
};

export default MainSection;
