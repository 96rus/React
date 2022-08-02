import React from "react";
import "./Header.css";
import Logo from "../../images/friendkit-white.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <a href="#logo" className="logo">
            <img src={Logo} alt="FriendKit" className="logo__img" />
          </a>
          <ul className="menu">
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Friend Requests
              </a>
            </li>
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Notifications
              </a>
            </li>
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Messages
              </a>
            </li>
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Explore
              </a>
            </li>
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Search
              </a>
            </li>
            <li className="menu__list">
              <a href="#link" className="menu__link">
                Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
