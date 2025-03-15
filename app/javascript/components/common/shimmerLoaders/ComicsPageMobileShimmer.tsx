import React from 'react';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPageMobile.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const dummyComicsList = new Array(20).fill(null);

const ComicsPageMobileShimmer = () => {
  return (
    <div className="comicsPageMobileWrapper">
      <div>
        {dummyComicsList.map((index) => (
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
    </div>
  );
};

export default ComicsPageMobileShimmer;
