import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const DisplayBlog = ({ blogContent }) => {
  const {
    id,
    authorName,
    authorPicture,
    blogCover,
    blogTitle,
    publishData,
    readTime,
  } = blogContent;
  return (
    <div className="mx-auto max-w-[845px] mb-10">
      <figure>
        <img src={blogCover} alt={blogTitle} className="rounded-lg w-full" />
      </figure>
      <div>
        <div className="flex justify-between py-5 flex-wrap">
          <div>
            <div className="flex gap-5 items-center">
              <img
                className="w-16 h-16 rounded-full"
                src={authorPicture}
                alt={authorName}
              />
              <div>
                <h2 className="font-bold text-2xl">{authorName}</h2>
                <p className="font-semibold text-slate-600">{publishData}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 ml-20 md:ml-0">
            <p className="font-medium text-slate-600 text-xl">
              {readTime} min read
            </p>
            <button className="p-5 active:scale-90 hover:bg-red-100 rounded-lg transition-all text-xl">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-4xl">{blogTitle}</h2>
          <button className="text-purple-500 font-semibold underline pt-4">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBlog;
