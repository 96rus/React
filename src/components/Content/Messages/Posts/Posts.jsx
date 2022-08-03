import React from "react";
import post from "./Post.module.css";
import img from "./../../../../images/dan.jpg";

const Posts = () => {
  return (
    <div className={post.post}>
      <img src={img} alt="postPhoto" />
      <div className={post.message}>
        <p>8:03 am</p>
        <div className={post.text}>
          <p>Hi Jenna! I made a new design, and i wanted to show it to you.</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
