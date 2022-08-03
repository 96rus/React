import React from "react";
import textarea from "./Textarea.module.css";

const Textarea = () => {
  return (
    <div className={textarea.textarea}>
      <div>
        <button>Send</button>
      </div>
      <textarea className={textarea.chat}></textarea>
    </div>
  );
};

export default Textarea;
