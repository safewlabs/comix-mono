import React from 'react';
// import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummyComics = new Array(20).fill(null);

const GenreBooksListShimmer = () => {
  return (
    <div className="genrePageListWrapper">
      {dummyComics.map((index) => (
        <div key={`${crypto.randomUUID()}-${index}`} className="newReleaseCard">
          <div className="shimmerLoader shimmerComicImage" />
          <div className="newReleaseNameAndStore">
            <div className="shimmerLoader newReleaseNameLoading"></div>
            <div className="shimmerLoader newReleaseStoreLoading"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenreBooksListShimmer;
