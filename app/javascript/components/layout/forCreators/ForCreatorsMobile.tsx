import React, { FC } from 'react';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
import '@assets/stylesheets/newui/creatorsStyles/forCreators.sass.scss';
import StackedCardsMobile from './StackedCardsMobile';

const ForCreatorsMobile: FC = () => {
  return (
    <div className="forCreatorsWrapperMobile">
      <TitleAndTaglineMobile
        title="FOR CREATORS"
        tagline="Empowering Creators To Showcase, Sell And Connect With Their Audience Like Never Before."
      />
      <StackedCardsMobile />
      <div className="joinUsButtonMobile">
        <Button
          routeText="/publish"
          buttonText="JOIN US AS A CREATOR"
          aria-label="Join us as a creator"
        />
      </div>
    </div>
  );
};

export default ForCreatorsMobile;
