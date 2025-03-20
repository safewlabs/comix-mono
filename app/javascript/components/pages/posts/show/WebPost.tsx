import React, { FC } from 'react';

export type PostProps = {
  title: string;
  body: string;
  summary: string;
  article_type: string;
};

const WebPost: FC<PostProps> = ({ title, body, summary, article_type }) => {
  console.log(title, body, summary, article_type);
  return <div>WebPost</div>;
};

export default WebPost;
