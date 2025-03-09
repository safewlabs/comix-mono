import React from "react";
import { useContent } from "@thoughtbot/superglue";
import { useMediaQuery } from "react-responsive";
import MobilePost from "@javascript/components/pages/posts/show/MobilePost";
import WebPost from "@javascript/components/pages/posts/show/WebPost";

type PostProps = {
  post: {
    title: string;
    body: string;
    summary: string;
    article_type: string;
  };
};

export default function PostShow() {
  const { post } = useContent<PostProps>();
  const { title, body, summary, article_type } = post;

  const isWeb = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      {isWeb && (
        <WebPost
          title={title}
          body={body}
          summary={summary}
          article_type={article_type}
        />
      )}
      {isMobile && (
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
