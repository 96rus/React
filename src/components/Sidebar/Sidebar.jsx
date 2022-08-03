import React from "react";
import photo from "../../images/jenna.png";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar.sidebar}>
      <div>
        <div className={sidebar.photo}>
          <img className={sidebar.img} src={photo} alt="M" />
          <p className={sidebar.name}>Jenna Davis</p>
          <p className={sidebar.city}>Melbourne, AU</p>
          <div className={sidebar.tick}></div>
        </div>
        <div className={sidebar.follow}>
          <p>
            <span>Followers</span>
            2.3k
          </p>
          <p>
            <span>Following</span>
            2.4k
          </p>
        </div>
      </div>
      <nav className={sidebar.menu}>
        <ul>
          <li className={sidebar.item}>
            <a href="#link">Feed</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Explore</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Notifications</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Messages</a>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <a href="#link">Direct</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Stats</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Settings</a>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <a href="#link">Privacy</a>
          </li>
          <li className={sidebar.item}>
            <a href="#link">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
