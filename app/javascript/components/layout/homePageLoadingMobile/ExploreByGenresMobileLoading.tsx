import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import Button from '~/components/common/Button';
import '~/styles/exploreByGenresStyles/exploreByGenresMobileStyles.scss';
import '~/styles/shimmerLoader.scss';

const dummyArr = new Array(14).fill(null);

const ExploreByGenresMobileLoading = () => {
  return (
    <section
      className="exploreByGenresMobileBackground"
      aria-label="Explore by Genres"
    >
      <TitleAndTaglineMobile
        title="EXPLORE BY GENRES"
        tagline="Explore Comics Featured Across Various Platforms."
      />
      <div
        className="genreListMobile"
        role="list"
        aria-label="List of comic genres"
      >
        {dummyArr.map((li, index) => (
          <div key={index} className="genreCardMobile shimmerLoaderPurple">
            <div className="genreImageMobile shimmerLoaderPurple" />
          </div>
        ))}
      </div>
      <Button
        routeText={'/genres'}
        buttonText="VIEW ALL"
        aria-label="View all genres"
      />
    </section>
  );
};

export default ExploreByGenresMobileLoading;
