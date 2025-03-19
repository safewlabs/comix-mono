import React, { FC } from 'react';
import { ExploreByGenresProps } from './ExploreByGenres';
import TitleAndTaglineMobile from '../../common/TitleAndTaglineMobile';
import Button from '../../common/Button';
// import '@assets/stylesheets/newui/exploreByGenresStyles/exploreByGenresMobileStyles.sass.scss';

const ExploreByGenresMobile: FC<ExploreByGenresProps> = ({
  // exploreByGenres,
  genres,
}) => {
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
        {genres.map((genre, index) => (
          <div
            className="genreCardMobile"
            key={index}
            role="listitem"
            aria-label={`Genre: ${genre.name}`}
          >
            <p className="genreNameMobile">{genre.name.toUpperCase()}</p>
            <img
              className="genreImageMobile"
              src={`https://comix.one${genre.cover}`}
              alt={`Cover image for ${genre.name} genre`}
            />
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

export default ExploreByGenresMobile;
