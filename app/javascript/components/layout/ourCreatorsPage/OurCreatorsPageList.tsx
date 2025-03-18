import React, { FC, useState } from 'react';
import { OurCreatorsPageLayoutProps } from './OurCreatorsPageLayout';
import EyeIcon from '@assets/icons/eye-icon.svg';
// import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsPageStyles.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

const AvatarImage: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="imageWrapper">
      <img
        className={`creatorImage ${isLoaded ? '' : 'shimmerLoader'}`}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const OurCreatorsPageList: FC<OurCreatorsPageLayoutProps> = ({
  creatorsPageData,
}) => {
  return (
    <div className="creatorsPageListWrapperWeb">
      {creatorsPageData.map((creatorData, index) => (
        <a
          className="creatorCard"
          key={index}
          href={`https://www.comix.one/profiles/${creatorData.slug}`}
        >
          <AvatarImage
            src={`https://comix.one/${creatorData.avatar}`}
            alt={creatorData.slug}
          />
          <div className="eyeWithBackground1">
            <img src={EyeIcon} alt="eye-icon" />
          </div>
          <div className="creatorNameAndSkills">
            <p className="creatorName">{creatorData.name}</p>
            {creatorData?.skills && creatorData.skills.length > 30 ? (
              <>
                <p className="creatorSkills">
                  {`${creatorData.skills.slice(0, 30)}...`}
                </p>
                <p className="creatorSkillsBanner">{creatorData.skills}</p>
              </>
            ) : (
              <p className="creatorSkills">{creatorData?.skills || ''}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default OurCreatorsPageList;
