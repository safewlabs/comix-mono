import { FC } from 'react';
import { BookDataType } from '~/utils/dummyData/genreBooksData';
import '~/styles/comicsPageStyles/comicsPage.scss';
import ComicsPageCard from '../comicsPage/ComicsPageCard';

export type GenreBooksListProps = {
  sortedComics: BookDataType[];
};

const GenreBooksList: FC<GenreBooksListProps> = ({ sortedComics }) => {
  return (
    <div className="genrePageListWrapper">
      {sortedComics.map((comicData, index) => (
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
