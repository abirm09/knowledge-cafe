import React from "react";
import BookmarkedPosts from "../BookmarkedPosts/BookmarkedPosts";

const TimeSpentAndBookmark = ({ totalReadTime, bookMarkedPosts }) => {
  return (
    <div>
      <div className="py-5 text-center border-2 border-indigo-600 bg-slate-100 rounded-lg">
        <h2 className="text-indigo-600 font-bold text-2xl">
          Spent time on read : {totalReadTime} min
        </h2>
      </div>
      <div className="bg-slate-100 p-4 mt-5 rounded-lg">
        <h2 className="font-bold text-2xl">Bookmarked Blogs : 8</h2>
        <div className="mt-5">
          {bookMarkedPosts.map(bookMarkedPost => (
            <BookmarkedPosts
              key={bookMarkedPost.id}
              bookMarkedPost={bookMarkedPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSpentAndBookmark;
