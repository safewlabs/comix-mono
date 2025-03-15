import React, { useRef } from 'react';
import { handleScroll } from '@javascript/components/common/handleScroll';
import Tagline from '@javascript/components/common/Tagline';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import '@assets/stylesheets/newui/titleAndButtons.scss';
import '@assets/stylesheets/newui/top10ComicsStyles/top10Comics.scss';
import BackAndForwardButtons from '@javascript/components/common/BackAndForwardButtons';

const dummmyList = new Array(20).fill(null);

const Top10ComicsLoadingWeb = () => {
  const top10ComicsWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="top10ComicsWrapperWeb">
      <div className="titlesAndButtonsWrapperTwo">
        <TitleAndButtons
          routeText={'/'}
          title={'TOP 10 COMICS'}
          buttonText={'VIEW ALL'}
        />
        <div className="titleAndButtons">
          <BackAndForwardButtons
            onBack={() => top10ComicsWrapperRef.current && handleScroll({current: top10ComicsWrapperRef.current}, 'left')}
            onForward={() => top10ComicsWrapperRef.current && handleScroll({current : top10ComicsWrapperRef.current}, 'right')}
          />
        </div>
      </div>
      <Tagline
        tagline={' See The Hottest Comics That Everyone’s Talking About.'}
      />
      <div className="top10ComicsListWrapperWeb" ref={top10ComicsWrapperRef}>
        {dummmyList.map((index) => (
          <div key={index}>
            <div
              key={index}
              className="newReleaseCard shimmerLoaderPurple"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10ComicsLoadingWeb;
