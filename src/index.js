import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App updateNewPostText={updateNewPostText} state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);