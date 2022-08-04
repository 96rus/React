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
      <Posts message="Hi there!" time="8:03 am"/>
      <Posts message="I made a new design, and i wanted to show it to you." time="9:14 am"/>
      <Posts message="I'm going to Starbucks now, would you like to go with me?" time="11:50 am"/>
      <Posts message="What are you going to do tonight?" time="18:50 pm"/>
      <div className={messages.footer}>
        <Textarea />
      </div>
    </div>
  );
};

export default Messages;
