import React, { FC } from 'react';
import ProgressSegmentIcon from '@assets/icons/progress-segment-icon.svg';
import ProgressSegmentUnfilledIcon from '@assets/icons/progress-secment-unfilled-icon.png';
import '@assets/stylesheets/newui/mainSection.sass.scss';

const ProgressBar: FC = () => {
  return (
    <div
      className="progressBar"
      role="progressbar"
      aria-label="Progress bar indicating current status"
    >
      <img
        src={ProgressSegmentIcon}
        alt="Progress Segment Icon"
        className="progressBarSection"
      />
      <img
        src={ProgressSegmentUnfilledIcon}
        alt="Progress Segment Icon"
        className="progressBarSection"
      />
      <img
        src={ProgressSegmentUnfilledIcon}
        alt="Progress Segment Icon"
        className="progressBarSection"
      />
      <img
        src={ProgressSegmentUnfilledIcon}
        alt="Progress Segment Icon"
        className="progressBarSection"
      />
    </div>
  );
};

export default ProgressBar;
