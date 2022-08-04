import React from "react";
import post from "./Post.module.css";
import img from "./../../../../images/dan.jpg";

const Posts = (props) => {
  return (
    <div className={post.post}>
      <img src={img} alt="postPhoto" />
      <div className={post.message}>
        <p>{props.time}</p>
        <div className={post.text}>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
