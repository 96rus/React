import React from "react";
import header from "./Header.module.css";
import Logo from "../../images/friendkit-white.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
	const selectedLink = () => {
		return (
			select => select.isActive?header.active:header.item
		);
	}

  return (
    <header className={header.header}>
      <div className={header.container}>
        <div className={header.top}>
          <a href="#logo">
            <img src={Logo} alt="FriendKit" className={header.img} />
          </a>
          <ul className={header.menu}>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/friendRequests">Friend Requests</NavLink>
            </li>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/notifications">Notifications</NavLink>
            </li>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/messages">Messages</NavLink>
            </li>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/explore">Explore</NavLink>
            </li>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/search">Search</NavLink>
            </li>
            <li className={header.list}>
              <NavLink className={selectedLink()} to="/menu">Menu</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
