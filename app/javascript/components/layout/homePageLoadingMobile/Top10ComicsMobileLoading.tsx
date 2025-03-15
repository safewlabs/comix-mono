import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import Button from '~/components/common/Button';
import '~/styles/top10ComicsStyles/top10ComicsMobileStyles.scss';

const dummyList = new Array(10).fill(null);

const Top10ComicsMobileLoading = () => {
  return (
    <div className="top10ComicsMobileWrapper">
      <TitleAndTaglineMobile
        title="TOP 10 COMICS"
        tagline="See The Hottest Comics That Everyone's Talking About"
      />
      <div className="cardGroupMobile">
        {dummyList.map((index) => (
          <div
            className="newReleaseMobileCard shimmerLoaderPurple"
            key={`${crypto.randomUUID()}`}
          ></div>
        ))}
      </div>
      <Button routeText={'/'} buttonText="VIEW ALL" />
    </div>
  );
};

export default Top10ComicsMobileLoading;
