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
            <li className={header.list}>
              <a href="#link">Friend Requests</a>
            </li>
            <li className={header.list}>
              <a href="#link">Notifications</a>
            </li>
            <li className={header.list}>
              <a href="#link">Messages</a>
            </li>
            <li className={header.list}>
              <a href="#link">Explore</a>
            </li>
            <li className={header.list}>
              <a href="#link">Search</a>
            </li>
            <li className={header.list}>
              <a href="#link">Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
