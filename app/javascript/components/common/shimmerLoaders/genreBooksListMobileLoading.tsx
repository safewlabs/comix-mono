import React from 'react';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPageMobile.sass.scss';

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
