import React from 'react'
import Posts from "./Posts/Posts";
// import chat from './Chat.module.css'

const Chat = (props) => {

	let chatElements = props.chatData
	.map( c => <Posts postData={props.postData} user={c.user} id={c.id} />)

	return (
		<div>
			{chatElements}
		</div>
	)
}

export default Chat