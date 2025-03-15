import { FC } from 'react';
import '~/styles/comicsPageStyles/comicsPage.scss';
import ComicsPageCard from './ComicsPageCard';
import { ComicsPageLayoutProps } from './ComicsPageLayout';

const ComicsPageList: FC<ComicsPageLayoutProps> = ({ latestComics }) => {
  return (
    <div className="comicsPageListWrapper">
      {latestComics.map((latestComic, index) => (
        <a
          href={`https://www.comix.one/products/${latestComic.slug}`}
          key={index}
          aria-label={`View details for ${latestComic.name}`}
          role="link"
        >
          <ComicsPageCard index={index} comicData={latestComic} />
        </a>
      ))}
    </div>
  );
};

export default ComicsPageList;
