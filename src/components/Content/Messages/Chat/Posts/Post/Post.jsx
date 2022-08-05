import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={post.post}>
      <img src={props.user} alt="postPhoto" />
      <div className={post.message}>
        <p>{props.time}</p>
        <div className={post.text}>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;