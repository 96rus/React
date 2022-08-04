import React from "react";
import header from "./Header.module.css";
import Logo from "../../images/friendkit-white.svg";

const Header = () => {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.top}>
          <a href="#logo">
            <img src={Logo} alt="FriendKit" className={header.img} />
          </a>
          <ul className={header.menu}>
            <li className={`${header.list} ${header.active}`}>
              <a href="/friendRequests">Friend Requests</a>
            </li>
            <li className={header.list}>
              <a href="/notifications">Notifications</a>
            </li>
            <li className={header.list}>
              <a href="/messages">Messages</a>
            </li>
            <li className={header.list}>
              <a href="/explore">Explore</a>
            </li>
            <li className={header.list}>
              <a href="/search">Search</a>
            </li>
            <li className={header.list}>
              <a href="/menu">Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
