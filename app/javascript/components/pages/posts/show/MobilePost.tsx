import React, { FC } from 'react';
import { PostProps } from './WebPost';

const MobilePost: FC<PostProps> = ({ title, body, summary, article_type }) => {
  console.log(title, body, summary, article_type);
  return <div>MobilePost</div>;
};

export default MobilePost;
