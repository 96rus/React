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
	]

  return (
    <div className={users.users}>
      <User user={userData[0].user} id={userData[0].id}/>
      <User user={userData[1].user} id={userData[1].id}/>
      <User user={userData[2].user} id={userData[2].id}/>
      <User user={userData[3].user} id={userData[3].id}/>
      <User user={userData[4].user} id={userData[4].id}/>
      <User user={userData[5].user} id={userData[5].id}/>
			<User user={userData[3].user} id={userData[3].id}/>
			<User user={userData[1].user} id={userData[1].id}/>
			<User user={userData[5].user} id={userData[5].id}/>
			<User user={userData[2].user} id={userData[2].id}/>
			<User user={userData[4].user} id={userData[4].id}/>
			<User user={userData[3].user} id={userData[3].id}/>
    </div>
  );
};

export default Users;
