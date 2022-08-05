import React from 'react'
import user from './User.module.css'
import { Link } from "react-router-dom";

const User = (props) => {
	let path = "/messages/" + props.id;
  return (
    <Link to={path} className={user.user}>
      <img src={props.user} alt="user" />
    </Link>
  );
};

export default User;
