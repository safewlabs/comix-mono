import React, { FC } from 'react';
import ComicsPageCard from './ComicsPageCard';
import { ComicsPageLayoutProps } from './ComicsPageLayout';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';

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
