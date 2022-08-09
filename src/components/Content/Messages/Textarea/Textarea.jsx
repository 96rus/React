import React from "react";
import textarea from "./Textarea.module.css";

const Textarea = (props) => {

	let newPostElement = React.useRef();

  let addPost = () => { 
    props.addPost();
  };

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

  return (
    <div className={textarea.textarea}>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      <textarea onChange={onPostChange} ref={newPostElement} className={textarea.chat} value={props.newPostText} />
    </div>
  );
};

export default Textarea;
