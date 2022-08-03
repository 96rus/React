import React from "react";
import User from "./User/User";
import users from "./Users.module.css";

const Users = () => {
  return (
    <div className={users.users}>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default Users;
