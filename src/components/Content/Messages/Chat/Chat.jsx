import React from 'react'
import Posts from "./Posts/Posts";
// import chat from './Chat.module.css'
import img1 from "./../../../../images/dan.jpg";
import img2 from "./../../../../images/milly.jpg";
import img3 from "./../../../../images/bobby.jpg";
import img4 from "./../../../../images/elise.jpg";
import img5 from "./../../../../images/stella.jpg";
import img6 from "./../../../../images/jenna.png";

const Chat = () => {
	return (
		<div>
			<Posts user={img1} id="1" />
      <Posts user={img2} id="2" />
      <Posts user={img3} id="3" />
      <Posts user={img4} id="4" />
      <Posts user={img5} id="5" />
      <Posts user={img6} id="6" />
		</div>
	)
}

export default Chat