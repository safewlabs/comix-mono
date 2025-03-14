import React from 'react';
// import '~/styles/comicsPageStyles/comicsPage.scss';
// import '~/styles/shimmerLoader.scss';

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
