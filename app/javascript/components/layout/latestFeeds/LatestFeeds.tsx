import React, { FC } from 'react';
import '@assets/stylesheets/newui/TitleAndButtons.scss';
import '@assets/stylesheets/newui/latestStyles/latestFeeds.scss';
import Dropdown from '@javascript/components/common/Dropdown';
import BackAndForwardButtons from '@javascript/components/common/BackAndForwardButtons';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';

const LatestFeeds: FC = () => {
  return (
    <div className="latestFeedsWrapper">
      <TitleAndButtons routeText={'/'} title={'LATEST FEEDS'} />
      <div className="titleAndButtons">
        <Dropdown />
        <BackAndForwardButtons />
      </div>
    </div>
  );
};

export default LatestFeeds;
