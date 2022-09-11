import feed from "../images/clover.svg";
import friends from "../images/friends.svg";
import videos from "../images/videos.svg";
import tagEuro from "../images/tag-euro.svg";
import cart from "../images/cart.svg";
import house from "../images/house.svg";
import chrono from "../images/chrono.svg";
import question from "../images/question.svg";
import news from "../images/news.svg";
import cake from "../images/cake.svg";
import envato from "../images/envato.svg";
import calendar from "../images/calendar.svg";
import pin from "../images/pin.svg";
import idea from "../images/idea.svg";
import settings from "../images/settings.svg";
import img1 from "../images/dan.jpg";
import img2 from "../images/milly.jpg";
import img3 from "../images/bobby.jpg";
import img4 from "../images/elise.jpg";
import img5 from "../images/stella.jpg";
import img6 from "../images/jenna.png";
import postReducer from "./postReducer";
import messagesReducer from "./messagesReducer";

let store = {
  _state: {
    explore: {
      exploreData: [
        { value: feed, title: "Feed" },
        { value: friends, title: "Friends" },
        { value: videos, title: "Videos" },
        { value: tagEuro, title: "Pages" },
        { value: cart, title: "Commerce" },
        { value: house, title: "Interests" },
        { value: chrono, title: "Stories" },
        { value: question, title: "Questions" },
        { value: news, title: "Groups" },
        { value: cake, title: "News" },
        { value: envato, title: "Envato" },
        { value: calendar, title: "Events" },
        { value: pin, title: "CSS Ninja" },
        { value: idea, title: "Elements" },
        { value: settings, title: "Settings" },
      ],
    },
    messages: {
      postData: [
        { id: 1, message: "Hi there!", time: "8:03 AM" },
        {
          id: 2,
          message: "I made a new design, and i wanted to show it to you.",
          time: "9:14 AM",
        },
        {
          id: 3,
          message: "I'm going to Starbucks now, would you like to go with me?",
          time: "11:50 AM",
        },
        {
          id: 4,
          message: "What are you going to do tonight?",
          time: "06:50 PM",
        },
        { id: 5, message: "Good night!", time: "10:50 PM" },
      ],
      newPostText: "",
      chatData: [
        { user: img1, id: 1 },
        { user: img2, id: 2 },
        { user: img3, id: 3 },
        { user: img4, id: 4 },
        { user: img5, id: 5 },
        { user: img6, id: 6 },
      ],
      userData: [
        { user: img1, id: 1 },
        { user: img2, id: 2 },
        { user: img3, id: 3 },
        { user: img4, id: 4 },
        { user: img5, id: 5 },
        { user: img6, id: 6 },
        { user: img3, id: 3 },
        { user: img1, id: 1 },
        { user: img5, id: 5 },
        { user: img2, id: 2 },
        { user: img4, id: 4 },
        { user: img3, id: 3 },
      ],
      myMessages: [{ id: 1, message: "What's up?", time: "9:25 AM" }],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.messages = postReducer(this._state.messages, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
