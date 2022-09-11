import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./Posts/Posts";
// import chat from './Chat.module.css'

const Chat = (props) => {
  let chatElements = props.chatData.map((c) => (
    <Route
      path={String(c.id)}
      element={<Posts postData={props.postData} user={c.user} />}
    />
  ));

  return (
    <div>
      <Routes>{chatElements}</Routes>
    </div>
  );
};

export default Chat;
