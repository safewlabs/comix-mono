import React, { FC } from 'react';
// import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';
import ComicsPageList from './ComicsPageList';
import ComicsPageFilters from './ComicsPageFilters';
import { ProductType } from '@javascript/types/applicationTypes';

export interface ComicsPageLayoutProps {
  latestComics: ProductType[];
}

const ComicsPageLayout: FC<ComicsPageLayoutProps> = ({ latestComics }) => {
  return (
    <div className="comicsPageLayoutWrapper">
      <aside className="filtersSection" aria-labelledby="filters">
        <h2 id="filters" className="sr-only">
          Filters
        </h2>
        <ComicsPageFilters/>
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
