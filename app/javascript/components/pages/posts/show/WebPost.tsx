import AppMarketing from '@javascript/components/layout/appMarketing/AppMarketing';
import Footer from '@javascript/components/layout/footer/Footer';
import Header from '@javascript/components/layout/header/Header';
import React, { FC } from 'react';

export type PostProps = {
  title: string;
  body: string;
  summary: string;
  article_type: string;
};

const WebPost: FC<PostProps> = ({ title, body, summary, article_type }) => {
  console.log(title, body, summary, article_type);
  return (
    <div>
      <Header />
      <AppMarketing />
      <Footer />
    </div>
  );
};

export default WebPost;
