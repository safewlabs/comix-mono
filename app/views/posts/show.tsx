import React, { useState, useEffect } from 'react';
import { useContent } from '@thoughtbot/superglue';
import { useMediaQuery } from 'react-responsive';
import MobilePost from '@javascript/components/pages/posts/show/MobilePost';
import WebPost from '@javascript/components/pages/posts/show/WebPost';
import { PostType } from '@javascript/types/applicationTypes';
import WebPostLoading from '@javascript/components/pages/posts/show/WebPostLoading';
import MobilePostLoading from '@javascript/components/pages/posts/show/MobilePostLoading';

type PostProps = {
  post: PostType;
};

export default function PostShow() {
  const [loading, setLoading] = useState<boolean>(true);
  const { post } = useContent<PostProps>();
  const { title, body, summary, article_type } = post;

  const isDesktop = useMediaQuery(
    { query: '(min-width: 769px)' },
    undefined,
    (matches) => {
      // This callback prevents hydration mismatch by only using client-side media queries
      return matches;
    }
  );

  useEffect(() => {
    if (post) {
      // Add small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [post]);

  return (
    <>
      {loading ? (
        isDesktop ? (
          <WebPostLoading />
        ) : (
          <MobilePostLoading />
        )
      ) : isDesktop ? (
        <WebPost
          title={title}
          body={body}
          summary={summary}
          article_type={article_type}
        />
      ) : (
        <MobilePost
          title={title}
          body={body}
          summary={summary}
          article_type={article_type}
        />
      )}
    </>
  );
}
