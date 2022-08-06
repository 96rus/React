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
	let chatData = [
		{user: img1, id: 1},
		{user: img2, id: 2},
		{user: img3, id: 3},
		{user: img4, id: 4},
		{user: img5, id: 5},
		{user: img6, id: 6},
	]

	return (
		<div>
			<Posts user={chatData[0].user} id={chatData[0].id} />
      <Posts user={chatData[1].user} id={chatData[1].id} />
      <Posts user={chatData[2].user} id={chatData[2].id} />
      <Posts user={chatData[3].user} id={chatData[3].id} />
      <Posts user={chatData[4].user} id={chatData[4].id} />
      <Posts user={chatData[5].user} id={chatData[5].id} />
		</div>
	)
}

export default Chat