import React, { useEffect, useState } from "react";
import DisplayBlog from "../DisplayBlog/DisplayBlog";
import TimeSpentAndBookmark from "../TimeSpentAndBookmark/TimeSpentAndBookmark";

const Blog = () => {
  const [blogContents, setBlogContents] = useState([]);
  const [totalReadTime, setTotalReadTime] = useState(0);
  const [bookMarkedPosts, setBookMarkedPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogContents(data));
  }, []);
  const markAsReadHandler = time => {
    setTotalReadTime(totalReadTime + time);
  };
  const bookMarkHandler = (id, name) => {
    console.log(id, name);
    const isAlreadyAdded = bookMarkedPosts.find(
      bookMarkedPost => bookMarkedPost.id == id
    );
    if (isAlreadyAdded) {
      console.log("you have added this before.");
    } else {
      const newBookmark = {
        id,
        name,
      };
      setBookMarkedPosts([...bookMarkedPosts, newBookmark]);
    }
  };
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2 ">
          {blogContents.map(blogContent => (
            <DisplayBlog
              key={blogContent.id}
              blogContent={blogContent}
              markAsReadHandler={markAsReadHandler}
              bookMarkHandler={bookMarkHandler}
            ></DisplayBlog>
          ))}
        </div>
        <div className="col-span-1 mt-4">
          <div className="sticky top-10">
            <TimeSpentAndBookmark
              totalReadTime={totalReadTime}
              bookMarkedPosts={bookMarkedPosts}
            ></TimeSpentAndBookmark>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
