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
  return (
    <div className={users.users}>
      <User user={img1} id='1'/>
      <User user={img2} id='2'/>
      <User user={img3} id='3'/>
      <User user={img4} id='4'/>
      <User user={img5} id='5'/>
      <User user={img6} id='6'/>
			<User user={img3} id='3'/>
			<User user={img1} id='1'/>
			<User user={img5} id='5'/>
			<User user={img2} id='2'/>
			<User user={img4} id='4'/>
			<User user={img3} id='3'/>
    </div>
  );
};

export default Users;
