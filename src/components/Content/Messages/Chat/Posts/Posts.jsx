import React from "react";
import Post from "./Post/Post";
import { Link } from "react-router-dom";


const Posts = (props) => {

	let postElements = props.postData.map( p => <Post user={props.user} message={p.message} time={p.time} />)

	let path = "/messages/" + props.id;

  return (
    <Link to={path}>
			{postElements}
    </Link>
  );
};

export default Posts;
