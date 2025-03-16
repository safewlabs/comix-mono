import React, { useRef } from 'react';
import Edge from '@assets/stylesheets/newui/background/new-releases-lavender-background-edge.svg';
import { handleScroll } from '@javascript/components/common/handleScroll';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import Tagline from '@javascript/components/common/Tagline';
import BackAndForwardButtons from '@javascript/components/common/BackAndForwardButtons';
import '@assets/stylesheets/newui/newReleasesStyles/newReleases.sass.scss';
import '@assets/stylesheets/newui/titleAndButtons.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummmyList = new Array(20).fill(null);

const NewReleasesLoadingWeb = () => {
  const listWrapperRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="newReleasesWrapperOne">
      <img src={Edge} alt="edge" className="edgeOne" />
      <div className="newReleasesBackgroundOne">
        <div className="titlesAndButtonsWrapperOne">
          <TitleAndButtons
            routeText={'/comics'}
            title={'NEW RELEASES'}
            buttonText={'VIEW ALL'}
          />
          <div className="titleAndButtonsCommon">
            <BackAndForwardButtons
              onBack={() => listWrapperRef.current && handleScroll({current: listWrapperRef.current}, 'left')}
              onForward={() => listWrapperRef.current && handleScroll({current: listWrapperRef.current}, 'right')}
            />
          </div>
        </div>
        <Tagline
          tagline={'See The Hottest Comics That Everyone’s Talking About.'}
        />
        <div className="newReleasesListWrapperOne">
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
    </div>
  );
};

export default NewReleasesLoadingWeb;
