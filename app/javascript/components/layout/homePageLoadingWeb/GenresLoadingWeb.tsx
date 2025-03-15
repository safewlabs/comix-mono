import { useRef } from 'react';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import { handleScroll } from '~/components/common/handleScroll';
import Tagline from '~/components/common/Tagline';
import '~/styles/titleAndButtons.scss';
import '~/styles/exploreByGenresStyles/exploreByGenres.scss';
import '~/styles/shimmerLoader.scss';

const dummyList = new Array(20).fill(null);

const GenresLoadingWeb = () => {
  const exploreByGenresRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="exploreByGenresBackground"
      aria-label="Explore by Genre"
    >
      <div className="titlesAndButtonsWrapperThree">
        <TitleAndButtons
          routeText={'/genres'}
          title={'EXPLORE BY GENRE'}
          buttonText={'VIEW ALL'}
        />
        <div className="titleAndButtons">
          <BackAndForwardButtons
            onBack={() => handleScroll(exploreByGenresRef, 'left')}
            onForward={() => handleScroll(exploreByGenresRef, 'right')}
            aria-label="Scroll genres"
          />
        </div>
      </div>
      <Tagline tagline={'Explore Comics Featured Across Various Platforms.'} />
      <div
        ref={exploreByGenresRef}
        className="genreListWeb"
        role="list"
        aria-label="List of comic genres"
      >
        {dummyList.map((index) => (
          <div
            key={index}
            className="genreCardShimmer shimmerLoaderPurple"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default GenresLoadingWeb;
