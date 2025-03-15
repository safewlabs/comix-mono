import React, { FC } from 'react';
import ComicsPageCardMobile from './ComicsPageCardMobile';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPageMobile.sass.scss';

export interface PaginationTypes {
  prev_url: string;
  next_url: string;
  count: number;
  page: number;
  next: number;
}

export interface ComicsPageType {
  avatar: string;
  name: string;
  price: string;
  slug: string;
  store_name: string;
  store_slug: string;
}

export interface ComicsPageLayout {
  data: ComicsPageType[];
  pagination: PaginationTypes;
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
