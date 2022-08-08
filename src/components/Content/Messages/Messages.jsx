import React from "react";
import Chat from "./Chat/Chat";
import messages from "./Messages.module.css";
import Textarea from "./Textarea/Textarea";
import Users from "./Users/Users";

const Messages = (props) => {
  return (
    <div className={messages.messages}>
      <div className={messages.header}>
        <h1 className="title">Messages</h1>
        <Users userData={props.state.userData} />
      </div>
			<Chat chatData={props.state.chatData} postData={props.state.postData}/>
      <div className={messages.footer}>
        <Textarea addPost={props.addPost} />
      </div>
    </div>
  );
};

export default Messages;
