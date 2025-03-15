import { FC } from 'react';
import Dropdown from '../../common/Dropdown';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import '~/styles/TitleAndButtons.scss';
import '~/styles/latestStyles/latestFeeds.scss';

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
