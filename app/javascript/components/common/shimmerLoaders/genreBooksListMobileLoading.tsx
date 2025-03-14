import React from 'react';
// import '~/styles/shimmerLoader.scss';
// import '~/styles/comicsPageStyles/comicsPageMobile.scss';

const dummyArr = new Array(20).fill(null);

const GenreBooksListMobileLoading = () => {
  return (
    <div className="comicsPageMobileWrapper">
      {dummyArr.map((index) => (
        <div
          className="newReleaseCardMobile"
          key={`${index}-${crypto.randomUUID()}`}
        >
          <img className="comicImageShimmerMobile shimmerLoader" />
          <p className="newReleaseName"></p>
          <p className="newReleaseStore"></p>
        </div>
      ))}
    </div>
  );
};

export default GenreBooksListMobileLoading;
