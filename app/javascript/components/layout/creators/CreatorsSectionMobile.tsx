import { FC } from 'react';
import { CreatorSectionProps } from './CreatorsSection';
import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import Button from '~/components/common/Button';
import '~/styles/creatorsStyles/creatorsMobile.scss';
import '~/styles/creatorsStyles/creators.scss';

const CreatorsSectionMobile: FC<CreatorSectionProps> = ({ creatorsData }) => {
  const creatorsDataArray = creatorsData.data;

  return (
    <div className="creatorsMobileWrapper">
      <TitleAndTaglineMobile
        title="CREATORS"
        tagline="Empowering Creators To Showcase, Sell, And Connect With Their Audience Like Never Before."
      />
      <div className="creatorsList">
        {creatorsDataArray.slice(0, 6).map((creatorData, index) => (
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
