import React, { FC } from 'react';
import TitleAndButtons from '@javascript/components/common/TitleAndButtons';
import Tagline from '@javascript/components/common/Tagline';
// import '@assets/stylesheets/newui/creatorsStyles/creators.sass.scss';

export interface CreatorData {
  name: string;
  slug: string;
  skills: string;
  avatar: string;
}

export interface Pagination {
  prev_url: string;
  next_url: string;
  count: number;
  page: number;
  next: number;
}

export interface CreatorsData {
  data: CreatorData[];
  pagination: Pagination;
}

export interface CreatorSectionProps {
  creatorsData: CreatorsData;
}

const CreatorsSection: FC<CreatorSectionProps> = ({ creatorsData }) => {
  const creatorsDataArray = creatorsData.data;
  return (
    <div className="creatorsSectionWrapper">
      <div className="titleAndButtons">
        <TitleAndButtons
          routeText={'/creators'}
          title={'CREATORS'}
          buttonText={'VIEW ALL'}
        />
      </div>
      <Tagline tagline={'Meet The Creators Behind Your Favorite Comics.'} />
      <div className="creatorsWrapper">
        {creatorsDataArray.slice(0, 12).map((creatorData, index) => (
          <a
            href={`https://www.comix.one/profiles/${creatorData.slug}`}
            key={`${crypto.randomUUID()}-${index}`}
          >
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default CreatorsSection;
