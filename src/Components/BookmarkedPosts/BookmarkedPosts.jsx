import React from "react";

const BookmarkedPosts = ({ bookMarkedPost }) => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="font-semibold text-lg">{bookMarkedPost.name}</h2>
    </div>
  );
};

export default BookmarkedPosts;
