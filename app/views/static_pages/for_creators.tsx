import React from 'react';
import { useContent } from '@thoughtbot/superglue';

type StaticPagesProps = {
  static_pages: {
    title: string;
  };
};

export default function ForCreators() {
  const { static_pages } = useContent<StaticPagesProps>();
  const { title } = static_pages

  return (
    <>
      <div>{title}</div>
    </>
  );
}
