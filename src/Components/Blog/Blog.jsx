import React, { useEffect, useState } from "react";
import DisplayBlog from "../DisplayBlog/DisplayBlog";

const Blog = () => {
  const [blogContents, setBlogContents] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogContents(data));
  }, []);
  return (
    <div className="container mx-auto px-2 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          {blogContents.map(blogContent => (
            <DisplayBlog key={blogContent.id}></DisplayBlog>
          ))}
        </div>
        <div className="col-span-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          corporis dolor porro deserunt animi officia vel quo quas ut eos! Qui
          repellendus nihil fugiat hic deleniti maiores neque architecto
          provident.
        </div>
      </div>
    </div>
  );
};

export default Blog;
