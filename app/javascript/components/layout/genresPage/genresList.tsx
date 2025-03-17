import React, { FC } from 'react';
import { Link } from 'react-router-dom'; 
// import '@assets/stylesheets/newui/exploreByGenresStyles/exploreByGenres.sass.scss';

type GenreObj = {
  name: string;
  slug: string;
  cover?: string;
};

type GenresListProps = {
  sortedGenres: GenreObj[];
};

const GenresList: FC<GenresListProps> = ({ sortedGenres }) => {
  return (
    <div className="genreListForGenresScreen">
      {sortedGenres.map((genre, index) => {
        const genreLink = `/comics/${genre.slug}`; 
        return (
          <Link to={genreLink} key={index}>
            <div
              className="genreCardForGenresScreen"
              role="listitem"
              aria-label={`Genre: ${genre.name}`}
            >
              <p className="genreNameForGenresScreen">
                {genre.name.toUpperCase()}
              </p>
              <img
                className="genreImageForGenresScreen"
                src={`https://www.comix.one${genre.cover}`}
                alt={`Cover image for ${genre.name} genre`}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GenresList;
