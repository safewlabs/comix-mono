import React from 'react';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';

const dummyArr = new Array(20).fill(null);

const ComicsListLoading = () => {
  return (
    <div className="comicsPageLayoutWrapper">
      <aside className="filtersSection" aria-labelledby="filters">
        <h2 id="filters" className="sr-only">
          Filters
        </h2>
        <div className={'shimmerFilter shimmerLoader'}></div>
      </aside>
      <main className="comicsListSection">
        <h2 id="comicsList" className="sr-only">
          Comics List
        </h2>
        <div className="comicsPageListWrapper">
          {dummyArr.map((index) => (
            <div
              key={`${crypto.randomUUID()}-${index}`}
              className="newReleaseCard"
            >
              <div className="shimmerLoader shimmerComicImage" />
              <div className="newReleaseNameAndStore">
                <div className="shimmerLoader newReleaseNameLoading"></div>
                <div className="shimmerLoader newReleaseStoreLoading"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ComicsListLoading;
