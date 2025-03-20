import React, { FC } from 'react';
import { PostProps } from './WebPost';
import HeaderMobile from '@javascript/components/layout/headerMobile/HeaderMobile';
import AppMarketingMobile from '@javascript/components/layout/appMarketing/AppMarketingMobile';
import FooterMobile from '@javascript/components/layout/footer/FooterMobile';

const MobilePost: FC<PostProps> = ({ title, body, summary, article_type }) => {
  console.log(title, body, summary, article_type);
  return (
    <div>
      <HeaderMobile />
      <AppMarketingMobile />
      <FooterMobile />
    </div>
  );
};

export default MobilePost;
