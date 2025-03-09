import React from "react";
import parse from "html-react-parser";

type PostProps = {
  title: string;
  body: string;
  summary: string;
  article_type: string;
};

export default function WebPost(props: PostProps) {
  const { title, body, summary, article_type } = props;

  return (
    <div className="flex flex-col items-center py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-cx-purple font-semibold tracking-wide uppercase">
              {article_type}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </span>
          </h1>
          <div className="mt-8 text-2xl text-gray-500 leading-8">
            {parse(body)}
          </div>
        </div>
        <div className="mt-6 prose prose-purple prose-lg text-black mx-auto">
          {parse(summary)}
        </div>
      </div>
    </div>
  );
}
