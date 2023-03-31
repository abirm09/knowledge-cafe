import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const DisplayBlog = ({ blogContent, markAsReadHandler, bookMarkHandler }) => {
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
    <div className="mx-auto max-w-[845px] mb-5 mt-5">
      <figure>
        <img src={blogCover} alt={blogTitle} className="rounded-lg w-full" />
      </figure>
      <div>
        <div className="flex justify-between py-5 flex-wrap">
          <div>
            <div className="flex gap-5 items-center">
              <img
                className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                src={authorPicture}
                alt={authorName}
              />
              <div>
                <h2 className="font-bold text-xl md:text-2xl">{authorName}</h2>
                <p className="font-semibold text-slate-600 text-xs md:text-base">
                  {publishData}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 ml-16 md:ml-0">
            <p className="font-medium text-slate-600 text-md md:text-xl">
              {readTime} min read
            </p>
            <button
              onClick={() => bookMarkHandler(id, blogTitle)}
              className="p-5 active:scale-90 hover:bg-red-100 rounded-lg transition-all text-xl"
              title="BookMark"
            >
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-4xl">{blogTitle}</h2>
          <button
            onClick={() => markAsReadHandler(readTime)}
            className="text-purple-500 font-semibold my-3 md:my-5 underline rounded-md p-2 md:p-4 transition-all hover:bg-slate-200 active:scale-90 active:bg-slate-300"
          >
            Mark as read
          </button>
        </div>
      </div>
      <hr className="mt-5 border-[1.5px] border-slate-500" />
    </div>
  );
};

export default DisplayBlog;
