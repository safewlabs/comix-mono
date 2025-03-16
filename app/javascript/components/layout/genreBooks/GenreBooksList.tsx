import React, { FC } from 'react';
import { BookDataType } from '@javascript/utils/dummyData/genreBooksData';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';
import ComicsPageCard from '../comicsPage/ComicsPageCard';

export type GenreBooksListProps = {
  sortedComics: BookDataType[];
};

const GenreBooksList: FC<GenreBooksListProps> = ({ sortedComics }) => {
  return (
    <div className="genrePageListWrapper">
      {sortedComics.map((comicData: any, index: any) => (
        <a
          href={`https://www.comix.one/products/${comicData.slug}`}
          key={index}
          aria-label={`View details for ${comicData.name}`}
          role="link"
        >
          <ComicsPageCard index={index} comicData={comicData} />
        </a>
      ))}
    </div>
  );
};

export default GenreBooksList;
