import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {

	let postElements = props.postData.map( p => <Post user={props.user} message={p.message} time={p.time} />)

  return (
		<section>
			{postElements}
		</section>
  );
};

export default Posts;
