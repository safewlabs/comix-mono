import React, { FC } from 'react';
import EyeIcon from '@assets/icons/eye-icon.svg';
import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsMobileStyles.scss';

interface PaginationObj {
  count: number;
  next: number;
  next_url: string;
  page: number;
  prev_url: string;
}

interface CreatorsDataObj {
  avatar: string;
  name: string;
  skills: string;
  slug: string;
}

interface CreatorsPagePayload {
  data: CreatorsDataObj[];
  pagination: PaginationObj;
}

interface CreatorsPageMobileProps {
  creatorsPageData: CreatorsPagePayload;
}

const OurCreatorsPageMobile: FC<CreatorsPageMobileProps> = ({
  creatorsPageData,
}) => {
  return (
    <div className="creatorsPageLayoutWrapperMobile">
      {creatorsPageData.data.map((creatorData, index) => (
        <a
          key={index}
          href={`https://www.comix.one/profiles/${creatorData.slug}`}
        >
          <div className="creatorCard">
            <img
              className="creatorImage"
              src={`https://comix.one${creatorData.avatar}`}
              alt={creatorData.slug}
            />
            <div className="eyeWithBackground">
              <img src={EyeIcon} alt="eye-icon" />
            </div>
            <div className="creatorNameAndSkills">
              <p className="creatorName">{creatorData.name}</p>
              {creatorData.skills.length > 30 ? (
                <>
                  <p className="creatorSkills">
                    {`${creatorData.skills.slice(0, 30)}...`}
                  </p>
                  <p className="creatorSkillsBanner">{creatorData.skills}</p>
                </>
              ) : (
                <p className="creatorSkills">{creatorData.skills}</p>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OurCreatorsPageMobile;
