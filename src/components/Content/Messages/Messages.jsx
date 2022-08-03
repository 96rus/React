import React from "react";
import messages from "./Messages.module.css";
import Posts from "./Posts/Posts";
import Textarea from "./Textarea/Textarea";
import Users from "./Users/Users";

const Messages = () => {
  return (
    <div className={messages.messages}>
      <div className={messages.header}>
        <h1 className="title">Messages</h1>
        <Users />
      </div>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <div className={messages.footer}>
        <Textarea />
      </div>
    </div>
  );
};

export default Messages;
