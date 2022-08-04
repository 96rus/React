import React from "react";
import photo from "../../images/lana.jpeg";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar.sidebar}>
      <div>
        <div className={sidebar.photo}>
          <img className={sidebar.img} src={photo} alt="M" />
          <p className={sidebar.name}>Lana Davis</p>
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
            1.4k
          </p>
        </div>
      </div>
      <nav className={sidebar.menu}>
        <ul>
          <li className={sidebar.item}>
            <a href="/feed">Feed</a>
          </li>
          <li className={sidebar.item}>
            <a href="/explore">Explore</a>
          </li>
          <li className={sidebar.item}>
            <a href="/notifications">Notifications</a>
          </li>
          <li className={sidebar.item}>
            <a href="/messages">Messages</a>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <a href="/direct">Direct</a>
          </li>
          <li className={sidebar.item}>
            <a href="/stats">Stats</a>
          </li>
          <li className={sidebar.item}>
            <a href="/settings">Settings</a>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <a href="/privacy">Privacy</a>
          </li>
          <li className={sidebar.item}>
            <a href="/help">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
