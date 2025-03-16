import React from 'react';
// import '@assets/stylesheets/newui/exploreByGenresStyles/exploreByGenresMobileStyles.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';

const dummyArr = new Array(14).fill(null);

const ExploreByGenresMobileLoading = () => {
  return (
    <section
      className="exploreByGenresMobileBackground"
      aria-label="Explore by Genres"
    >
      <TitleAndTaglineMobile
        title="EXPLORE BY GENRES"
        tagline="Explore Comics Featured Across Various Platforms."
      />
      <div
        className="genreListMobile"
        role="list"
        aria-label="List of comic genres"
      >
        {dummyArr.map((index) => (
          <div key={index} className="genreCardMobile shimmerLoaderPurple">
            <div className="genreImageMobile shimmerLoaderPurple" />
          </div>
        ))}
      </div>
      <Button
        routeText={'/genres'}
        buttonText="VIEW ALL"
        aria-label="View all genres"
      />
    </section>
  );
};

export default ExploreByGenresMobileLoading;
