import React from "react";
import textarea from "./Textarea.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/postReducer";

const Textarea = (props) => {
  let newPostElement = React.useRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={textarea.textarea}>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={textarea.chat}
        value={props.newPostText}
      />
    </div>
  );
};

export default Textarea;
