import React from "react";
import Post from "./Post/Post";
import { Link } from "react-router-dom";


const Posts = (props) => {
	let postData = [
		{message: "Hi there!", time: "8:03 am"},
		{message: "I made a new design, and i wanted to show it to you.", time: "9:14 am"},
		{message: "I'm going to Starbucks now, would you like to go with me?", time: "11:50 am"},
		{message: "What are you going to do tonight?", time: "18:50 pm"},
		{message: "Good night!", time: "22:50 pm"},
	]

	let postElements = postData.map( p => <Post user={props.user} message={p.message} time={p.time} />)

	let path = "/messages/" + props.id;

  return (
    <Link to={path}>
			{postElements}
    </Link>
  );
};

export default Posts;
