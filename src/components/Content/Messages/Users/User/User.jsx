import React from "react";
import user from "./User.module.css"
import img1 from "./../../../../../images/dan.jpg";

const User = () => {
  return (
    <div className={user.user}>
      <img src={img1} alt="user" />
    </div>
  );
};

export default User;
