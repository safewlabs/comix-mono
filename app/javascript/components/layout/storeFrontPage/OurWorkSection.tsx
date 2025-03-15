import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageWebStyles.sass.scss';
import { storePageData } from '~/utils/dummyData/storePageData';
import React, { FC } from 'react';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/comicsPageStyles/comicsPage.sass.scss';

const OurWorkSection: FC = () => {
  const ourWorkBooksList = storePageData.data.products;

  return (
    <div className="ourWorkSectionWrapper">
      <div className="ourWorkTitle">OUR WORK</div>
      <div className="ourWorkListWrapper">
        {ourWorkBooksList.slice(0, 6).map((listItem, index) => (
          <div key={index} className="storeFrontCard">
            <div className="imageWrapper">
              <img
                className="comicImage shimmerLoader"
                src={`https://comix.one${listItem.avatar}`}
                alt={`${listItem.name} comic cover`}
                aria-describedby={`comic-name-${index}`}
              />
            </div>
            <div className="newReleaseNameAndStore">
              <p
                className="newReleaseName"
                id={`comic-name-${index}`}
                aria-label={`Comic name: ${listItem.name}`}
              >
                {listItem.name.length > 30
                  ? `${listItem.name.toUpperCase().substring(0, 30)}...`
                  : listItem.name.toUpperCase()}
              </p>
              <p className="newReleaseStore">
                {listItem.store_name.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkSection;
