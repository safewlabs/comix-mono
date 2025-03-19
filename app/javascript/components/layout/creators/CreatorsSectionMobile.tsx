import React, { FC } from 'react';
import { CreatorSectionProps } from './CreatorsSection';
import TitleAndTaglineMobile from '@javascript/components/common/TitleAndTaglineMobile';
import Button from '@javascript/components/common/Button';
// import '@assets/stylesheets/newui/creatorsStyles/creatorsMobile.sass.scss';
// import '@assets/stylesheets/newui/creatorsStyles/creators.sass.scss';

const CreatorsSectionMobile: FC<CreatorSectionProps> = ({ home_profiles }) => {
  // const creatorsDataArray = creatorsData.data;

  return (
    <div className="creatorsMobileWrapper">
      <TitleAndTaglineMobile
        title="CREATORS"
        tagline="Empowering Creators To Showcase, Sell, And Connect With Their Audience Like Never Before."
      />
      <div className="creatorsList">
        {home_profiles.slice(0, 6).map((creatorData, index) => (
          <div className="creatorImageNameAndTitle" key={index}>
            <img
              className="creatorImage"
              src={`https://comix.one${creatorData.avatar}`}
              alt={creatorData.slug}
            />
            <div className="creatorName">{creatorData.name}</div>
            <div className="creatorSkills">
              {creatorData.skills.length > 30
                ? `${creatorData.skills.slice(0, 30)}...`
                : creatorData.skills}
            </div>
          </div>
        ))}
      </div>
      <Button routeText={'/publish'} buttonText="JOIN US AS A CREATOR" />
    </div>
  );
};

export default CreatorsSectionMobile;
