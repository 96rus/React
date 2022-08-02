import React from "react";
import photo from "../../images/jenna.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user__container">
        <div className="user__photo">
          <img className="photo" src={photo} alt="M" />
          <p className="name">Jenna Davis</p>
          <p className="city">Melbourne, AU</p>
          <div className="tick">
            <i class="fa-solid fa-circle-check"></i>
          </div>
        </div>
        <div className="user__follow">
          <p className="user__followers">
            <span>Followers</span>
            2.3k
          </p>
          <p className="user__following">
            <span>Following</span>
            2.4k
          </p>
        </div>
      </div>
      <div className="user__menu">
        <nav className="sidebar-menu">
          <ul className="sidebar-menu__list">
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Feed
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Explore
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Notifications
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Messages
              </a>
            </li>
          </ul>
          <div className="sidebar-menu__separator"></div>
          <ul className="sidebar-menu__list">
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Direct
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Stats
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Settings
              </a>
            </li>
          </ul>
          <div className="sidebar-menu__separator"></div>
          <ul className="sidebar-menu__list">
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Privacy
              </a>
            </li>
            <li className="sidebar-menu__item">
              <a className="sidebar-menu__link" href="#link">
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
