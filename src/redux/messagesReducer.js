const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      state.myMessages.push({
        id: state.myMessages.length + 1,
        message: body,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
