import { FC } from 'react';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import Tagline from '~/components/common/Tagline';
import StackedCards from './StackedCards';
import '~/styles/creatorsStyles/forCreators.scss';

const ForCreators: FC = () => {
  return (
    <div className="forCreatorsWrapperWeb">
      <div className="titleButtonsFive">
        <TitleAndButtons
          routeText={'/publish'}
          title="FOR CREATORS"
          buttonText="JOIN US AS A CREATOR"
          aria-label="Join us as a creator"
        />
      </div>
      <Tagline tagline="Empowering Creators To Showcase, Sell, And Connect With Their Audience Like Never Before." />
      <div className="stackedCardsWrapperWeb">
        <StackedCards />
      </div>
    </div>
  );
};

export default ForCreators;
