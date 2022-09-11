import React from "react";
import chat from "./NotificationChat.module.css";
import post from "../../Messages/Chat/Posts/Post/Post.module.css";
import photo from "../../../../images/lana.jpeg";

const NotificationChat = (props) => {
  return (
    <div className={chat.container}>
      <div className={post.post}>
        <img src={photo} alt="postPhoto" />
        <div className={post.message}>
          <p>{props.time}</p>
          <div className={post.text}>
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationChat;
