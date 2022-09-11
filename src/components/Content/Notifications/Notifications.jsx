import React from "react";
import NotificationChat from "./NotificationChat/NotificationChat";
import textarea from "../Messages/Textarea/Textarea.module.css";
import notifications from "./Notifications.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/messagesReducer";

const Notifications = (props) => {
  let newMessageBody = props.state.newMessageBody;

  let onNewMessageChange = (e) => {
    const body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let notificationElements = props.state.myMessages.map((p) => (
    <NotificationChat message={p.message} time={p.time} />
  ));
  return (
    <div className={notifications.notifications}>
      <h1 className="title">My Messages</h1>
      {notificationElements}
      <div className={textarea.textarea}>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        <textarea
          value={newMessageBody}
          className={textarea.chat}
          onChange={onNewMessageChange}
          placeholder="Enter a message"
        />
      </div>
    </div>
  );
};

export default Notifications;
