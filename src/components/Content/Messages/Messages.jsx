import React from "react";
import Chat from "./Chat/Chat";
import messages from "./Messages.module.css";
import Textarea from "./Textarea/Textarea";
import Users from "./Users/Users";

const Messages = () => {
  return (
    <div className={messages.messages}>
      <div className={messages.header}>
        <h1 className="title">Messages</h1>
        <Users />
      </div>
			<Chat />
      <div className={messages.footer}>
        <Textarea />
      </div>
    </div>
  );
};

export default Messages;
