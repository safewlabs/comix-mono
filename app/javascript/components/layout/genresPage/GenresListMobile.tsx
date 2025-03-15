import { FC } from 'react';
import '~/styles/exploreByGenresStyles/exploreByGenres.scss';

type GenreObj = {
  name: string;
  slug: string;
  cover?: string;
};

type GenresListProps = {
  sortedGenres: GenreObj[];
};

const GenresListMobile: FC<GenresListProps> = ({ sortedGenres }) => {
  return (
    <div className="genreListForGenresScreen">
      {sortedGenres.map((genre, index) => (
        <a href={`https://www.comix.one/comics/${genre.slug}`} key={index}>
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
        </a>
      ))}
    </div>
  );
};

export default GenresListMobile;
