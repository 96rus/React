import React from "react";
import photo from "../../images/lana.jpeg";
import sidebar from "./Sidebar.module.css";
import { Link } from "react-router-dom";

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
            <Link to="/feed">Feed</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/explore">Explore</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <Link to="/direct">Direct</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/stats">Stats</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <div className={sidebar.separator}></div>
        <ul>
          <li className={sidebar.item}>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className={sidebar.item}>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
