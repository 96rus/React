import React from "react";
import User from "./User/User";
import users from "./Users.module.css";

const Users = (props) => {

	let userElements = props.userData.map( u => <User user={u.user} id={u.id}/>)

  return (
    <div className={users.users}>
      {userElements}
    </div>
  );
};

export default Users;
