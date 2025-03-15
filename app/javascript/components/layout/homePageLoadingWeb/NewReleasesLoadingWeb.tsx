import { useRef } from 'react';
import Edge from '../../../../assets/background/new-releases-lavender-background-edge.svg';
import { handleScroll } from '~/components/common/handleScroll';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import Tagline from '~/components/common/Tagline';
import '~/styles/newReleasesStyles/newReleases.scss';
import '~/styles/titleAndButtons.scss';
import '~/styles/shimmerLoader.scss';

const dummmyList = new Array(20).fill(null);

const NewReleasesLoadingWeb = () => {
  const listWrapperRef = useRef<HTMLDivElement>(null);
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
              onBack={() => handleScroll(listWrapperRef, 'left')}
              onForward={() => handleScroll(listWrapperRef, 'right')}
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
