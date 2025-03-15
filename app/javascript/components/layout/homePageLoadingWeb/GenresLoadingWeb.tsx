import React, { useRef } from 'react';
import BackAndForwardButtons from '@javascript/components/common/BackAndForwardButtons';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import Tagline from '@javascript/components/common/Tagline';
import { handleScroll } from '@javascript/components/common/handleScroll';
import '@assets/stylesheets/newui/titleAndButtons.scss';
import '@assets/stylesheets/newui/exploreByGenresStyles/exploreByGenres.scss';
import '@assets/stylesheets/newui/shimmerLoader.scss';

const dummyList = new Array(20).fill(null);

const GenresLoadingWeb = () => {
  const exploreByGenresRef = useRef<HTMLDivElement | null>(null);

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
            onBack={() =>
              exploreByGenresRef.current &&
              handleScroll({ current: exploreByGenresRef.current }, 'left')
            }
            onForward={() =>
              exploreByGenresRef.current &&
              handleScroll({ current: exploreByGenresRef.current }, 'right')
            }
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
