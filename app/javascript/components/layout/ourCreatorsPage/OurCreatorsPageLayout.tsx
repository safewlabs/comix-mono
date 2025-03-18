import React, { FC } from 'react';
import OurCreatorsPageList from './OurCreatorsPageList';
import OurCreatorsFilter from './OurCreatorsFilter';
// import '@assets/stylesheets/newui/creatorsStyles/ourCreatorsPageStyles.sass.scss';

export interface CreatorObjectType {
  avatar?: string;
  name: string;
  skills: string;
  slug: string;
}

export interface OurCreatorsPageLayoutProps {
  creatorsPageData: CreatorObjectType[];
}

const OurCreatorsPageLayout: FC<OurCreatorsPageLayoutProps> = ({
  creatorsPageData,
}) => {
  //NEW BACKGROUND STRATEGY
  const bgStyle = {
    backgroundImage: `url('/images/creators-page-background.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="creatorsPageLayoutWrapperWeb" style={bgStyle}>
      <OurCreatorsFilter />
      <OurCreatorsPageList creatorsPageData={creatorsPageData} />
    </div>
  );
};

export default OurCreatorsPageLayout;
