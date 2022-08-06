import React from "react";
import User from "./User/User";
import users from "./Users.module.css";
import img1 from "./../../../../images/dan.jpg";
import img2 from "./../../../../images/milly.jpg";
import img3 from "./../../../../images/bobby.jpg";
import img4 from "./../../../../images/elise.jpg";
import img5 from "./../../../../images/stella.jpg";
import img6 from "./../../../../images/jenna.png";


const Users = () => {
	let userData = [
		{user: img1, id: 1},
		{user: img2, id: 2},
		{user: img3, id: 3},
		{user: img4, id: 4},
		{user: img5, id: 5},
		{user: img6, id: 6},
		{user: img3, id: 3},
		{user: img1, id: 1},
		{user: img5, id: 5},
		{user: img2, id: 2},
		{user: img4, id: 4},
		{user: img3, id: 3},
	]

	let userElements = userData.map( u => <User user={u.user} id={u.id}/>)

  return (
    <div className={users.users}>
      {userElements}
    </div>
  );
};

export default Users;
