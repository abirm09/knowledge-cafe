import React, { useEffect, useState } from "react";

const Blog = () => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    fetch("question.json")
      .then(res => res.json())
      .then(data => setAnswers(data));
  }, []);
  return (
    <div className="container mx-auto px-2 mt-28">
      <h2 className="text-center font-semibold text-2xl mb-10">
        Questions answers
      </h2>
      <div>
        {answers.map((answer, index) => {
          return (
            <div className="ml-1 mb-5" key={index}>
              <h2 className="font-bold text-2xl">
                {index + 1}. {answer.question}
              </h2>
              <div className="ml-3 md:ml-7">
                {answer.answer.split(";").map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
