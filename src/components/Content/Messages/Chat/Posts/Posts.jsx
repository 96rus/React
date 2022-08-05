import React from "react";
import Post from "./Post/Post";
import { Link } from "react-router-dom";


const Posts = (props) => {
	let path = "/messages/" + props.id;
  return (
    <Link to={path}>
			<Post user={props.user} message="Hi there!" time="8:03 am"/>
      <Post user={props.user} message="I made a new design, and i wanted to show it to you." time="9:14 am"/>
      <Post user={props.user} message="I'm going to Starbucks now, would you like to go with me?" time="11:50 am"/>
      <Post user={props.user} message="What are you going to do tonight?" time="18:50 pm"/>
    </Link>
  );
};

export default Posts;
