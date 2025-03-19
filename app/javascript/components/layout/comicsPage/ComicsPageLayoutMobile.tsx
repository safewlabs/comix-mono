import React, { FC } from 'react';
import ComicsPageCardMobile from './ComicsPageCardMobile';
import { PaginationType, ProductType } from '@javascript/types/applicationTypes';
// import '@assets/stylesheets/newui/comicsPageStyles/comicsPageMobile.sass.scss';

export interface ComicsPageLayout {
  data: ProductType[];
  pagination: PaginationType;
}

export interface ComicsPageLayoutProps {
  latestComics: ComicsPageLayout;
}

const ComicsPageLayoutMobile: FC<ComicsPageLayoutProps> = ({
  latestComics,
}) => {
  return (
    <section
      className="comicsPageMobileWrapper"
      aria-labelledby="comics-list-mobile"
    >
      <h2 id="comics-list-mobile" className="sr-only">
        Mobile Comics List
      </h2>
      {latestComics.data.map((latestComic, index) => (
        <a
          key={index}
          href={`https://www.comix.one/products/${latestComic.slug}`}
          aria-label={`View details for ${latestComic.name}`}
          role="link"
        >
          <ComicsPageCardMobile index={index} comicData={latestComic} />
        </a>
      ))}
    </section>
  );
};

export default ComicsPageLayoutMobile;
