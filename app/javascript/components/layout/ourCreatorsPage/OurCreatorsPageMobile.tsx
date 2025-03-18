import React, { FC } from 'react';
import EyeIcon from '../../icons/EyeIcon';

// import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsMobileStyles.sass.scss';

// interface PaginationObj {
//   count: number;
//   next: number;
//   next_url: string;
//   page: number;
//   prev_url: string;
// }

// interface CreatorsDataObj {
//   avatar: string;
//   name: string;
//   skills: string;
//   slug: string;
// }

// interface CreatorsPagePayload {
//   data: CreatorsDataObj[];
//   pagination?: PaginationObj;
// }

// interface CreatorsPageMobileProps {
//   creatorsPageData: CreatorsPagePayload;
// }
export interface ProfileTypes {
  avatar?: string;
  name: string;
  skills: string;
  slug: string;
}

export interface ProfilesProps {
  creatorsPageData: ProfileTypes[];
}


const OurCreatorsPageMobile: FC<ProfilesProps> = ({
  creatorsPageData,
}) => {
  //NEW BACKGROUND STRATEGY
  //In the mobile breakpoint 
  const bgMobileStyle = {
    backgroundImage: `url('/images/our-creators-mobile-background.svg')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    paddingTop: '100px',
    paddingBottom: '120px',
  };
  
  return (
    <div className="creatorsPageLayoutWrapperMobile" style={bgMobileStyle}>
      {creatorsPageData.map((creatorData, index) => (
        <a
          key={index}
          href={`https://www.comix.one/profiles/${creatorData.slug}`}
        >
          <div className="creatorCardMobile">
            <img
              className="creatorImageMobile shimmerLoader"
              src={`https://comix.one${creatorData.avatar}`}
              alt={creatorData.slug}
            />
            <div className="eyeWithBackgroundMobile">
              <EyeIcon />
            </div>
            <div className="creatorNameAndSkillsMobile">
              <p className="creatorNameMobile">{creatorData.name}</p>
              {creatorData?.skills && creatorData.skills.length > 30 ? (
                <>
                  <p className="creatorSkillsMobile">
                    {`${creatorData.skills.slice(0, 30)}...`}
                  </p>
                  <p className="creatorSkillsBannerMobile">{creatorData.skills}</p>
                </>
              ) : (
                <p className="creatorSkillsMobile">{creatorData?.skills || ''}</p>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OurCreatorsPageMobile;
