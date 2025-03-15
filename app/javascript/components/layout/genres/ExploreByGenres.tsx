import React, { FC, useRef } from 'react';
import TitleAndButtons from '../../common/TitleAndButtons';
import BackAndForwardButtons from '../../common/BackAndForwardButtons';
import { handleScroll } from '../../common/handleScroll';
import Tagline from '../../common/Tagline';
import '@assets/stylesheets/newui/titleAndButtons.sass.scss';
import '@assets/stylesheets/newui/exploreByGenresStyles/exploreByGenres.sass.scss';

export interface ExploreByGenres {
  cover?: string;
  name: string;
  slug: string;
}

export interface ExploreByGenresProps {
  exploreByGenres: ExploreByGenres[];
}

const ExploreByGenres: FC<ExploreByGenresProps> = ({ exploreByGenres }) => {
  const exploreByGenresRef = useRef<HTMLDivElement>(null!);

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
        {exploreByGenres.map((genre, index) => (
          <a
            key={index}
            href={`https://www.comix.one/comics/${genre.slug}`}
            className="genreCard"
            aria-label={`Explore comics in the ${genre.name} genre`}
          >
            <div role="listitem">
              <p className="genreName">{genre.name.toUpperCase()}</p>
              <img
                className="genreImage"
                src={`https://comix.one${genre.cover}`}
                alt={`Cover image for ${genre.name} comics`}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExploreByGenres;
