import React, { FC } from 'react';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';
// import Filters from './ComicsPageFilters';
import ComicsPageList from './ComicsPageList';

export interface PaginationTypes {
  prev_url: string;
  next_url: string;
  count: number;
  page: number;
  next: number;
}

export interface ComicsPageType {
  name: string;
  slug: string;
  price: string;
  store_name: string;
  store_slug: string;
  avatar: string;
}

export interface ComicsPageLayoutProps {
  latestComics: ComicsPageType[];
}

const ComicsPageLayout: FC<ComicsPageLayoutProps> = ({ latestComics }) => {
  return (
    <div className="comicsPageLayoutWrapper">
      <aside className="filtersSection" aria-labelledby="filters">
        <h2 id="filters" className="sr-only">
          Filters
        </h2>
        {/* <Filters /> */}
      </aside>

      <main className="comicsListSection">
        <h2 id="comicsList" className="sr-only">
          Comics List
        </h2>
        <ComicsPageList latestComics={latestComics} />
      </main>
    </div>
  );
};

export default ComicsPageLayout;
