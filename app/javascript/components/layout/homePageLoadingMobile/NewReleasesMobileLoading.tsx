import Edge from '../../../../assets/background/new-releases-lavender-background-edge.svg';
import Button from '~/components/common/Button';
import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import '~/styles/newReleasesStyles/newReleases.scss';
import '~/styles/newReleasesStyles/newReleasesMobileStyles.scss';
import '~/styles/shimmerLoader.scss';

const dummyList = new Array(12).fill(null);

const NewReleasesMobileLoading = () => {
  return (
    <div className="newReleasesMobileWrapper">
      <img src={Edge} alt="edge" className="edge" />
      <div className="newReleasesMobileBackground">
        <TitleAndTaglineMobile
          title="NEW RELEASES"
          tagline="See The Hottest Comics That Everyone’s Talking About."
        />
        <div>
          {dummyList.map((index) => (
            <div className="cardGroup" key={`${crypto.randomUUID()}`}>
              <div className="newReleaseMobileCard shimmerLoaderPurple"></div>
            </div>
          ))}
        </div>
        <Button routeText={'/comics'} buttonText={'VIEW ALL'} />
      </div>
    </div>
  );
};

export default NewReleasesMobileLoading;
