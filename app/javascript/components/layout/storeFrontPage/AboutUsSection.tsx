import React, { FC } from 'react';
// import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageWebStyles.sass.scss';
import parse from 'html-react-parser';

type AboutUsProps = {
  description: string;
};

const AboutUsSection: FC<AboutUsProps> = ({ description }) => {
  return (
    <div className="aboutUsWrapper">
      <div className="aboutUsTitle">ABOUT US</div>
      <div className="aboutUsDescription">{parse(description)}</div>
    </div>
  );
};

export default AboutUsSection;
