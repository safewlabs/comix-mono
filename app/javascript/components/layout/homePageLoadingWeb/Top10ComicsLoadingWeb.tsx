import { useRef } from 'react';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import { handleScroll } from '~/components/common/handleScroll';
import Tagline from '~/components/common/Tagline';
import '~/styles/titleAndButtons.scss';
import '~/styles/top10ComicsStyles/top10Comics.scss';

const dummmyList = new Array(20).fill(null);

const Top10ComicsLoadingWeb = () => {
  const top10ComicsWrapperRef = useRef<HTMLDivElement>(null);
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
            onBack={() => handleScroll(top10ComicsWrapperRef, 'left')}
            onForward={() => handleScroll(top10ComicsWrapperRef, 'right')}
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
