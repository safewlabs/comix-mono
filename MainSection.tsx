import React, { FC } from 'react';
import ProgressBar from './ProgressBar';

const MainSection: FC = () => {
  const mainSectionBgStyle = {
    backgroundImage: 'url("/background/main-section-background.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative' as const,
  };

  return (
    <div className="mainSectionBackground" style={mainSectionBgStyle}>
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
