import React from "react";
import textarea from "./Textarea.module.css";

const Textarea = (props) => {

	let newPostElement = React.useRef();

  let addPost = () => { 
		let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={textarea.textarea}>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      <textarea ref={newPostElement} className={textarea.chat}></textarea>
    </div>
  );
};

export default Textarea;
