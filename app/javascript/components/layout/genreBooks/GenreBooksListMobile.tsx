import { FC } from 'react';
import { GenreBooksListProps } from './GenreBooksList';
import ComicsPageCardMobile from '../comicsPage/ComicsPageCardMobile';
import '~/styles/comicsPageStyles/comicsPageMobile.scss';

const GenreBooksListMobile: FC<GenreBooksListProps> = ({ sortedComics }) => {
  return (
    <div className="comicsPageMobileWrapper">
      {sortedComics.map((latestComic, index) => (
        <a
          key={index}
          href={`https://www.comix.one/products/${latestComic.slug}`}
          aria-label={`View details for ${latestComic.name}`}
          role="link"
        >
          <ComicsPageCardMobile index={index} comicData={latestComic} />
        </a>
      ))}
    </div>
  );
};

export default GenreBooksListMobile;
