import React from "react";
import { Link } from "react-router-dom";
import explore from "./Explore.module.css";
import feed from "../../../images/clover.svg";
import friends from "../../../images/friends.svg";
import videos from "../../../images/videos.svg";
import tagEuro from "../../../images/tag-euro.svg";
import cart from "../../../images/cart.svg";
import house from "../../../images/house.svg";
import chrono from "../../../images/chrono.svg";
import question from "../../../images/question.svg";
import news from "../../../images/news.svg";
import cake from "../../../images/cake.svg";
import envato from "../../../images/envato.svg";
import calendar from "../../../images/calendar.svg";
import pin from "../../../images/pin.svg";
import idea from "../../../images/idea.svg";
import settings from "../../../images/settings.svg";

const Explore = () => {
  return (
    <div>
      <h1 className="title">Explore</h1>
      <section className={explore.container}>
        <Link className={explore.link} to="/explore">
          <img src={feed} alt="" /> 
          <h2 className={explore.title}>Feed</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={friends} alt="" /> 
          <h2 className={explore.title}>Friends</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={videos} alt="" /> 
          <h2 className={explore.title}>Videos</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={tagEuro} alt="" /> 
          <h2 className={explore.title}>Pages</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={cart} alt="" /> 
          <h2 className={explore.title}>Commerce</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={house} alt="" /> 
          <h2 className={explore.title}>Interests</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={chrono} alt="" /> 
          <h2 className={explore.title}>Stories</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={question} alt="" /> 
          <h2 className={explore.title}>Questions</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={news} alt="" /> 
          <h2 className={explore.title}>News</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={cake} alt="" /> 
          <h2 className={explore.title}>Groups</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={envato} alt="" /> 
          <h2 className={explore.title}>Envato</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={calendar} alt="" /> 
          <h2 className={explore.title}>Events</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={pin} alt="" />
          <h2 className={explore.title}>CSS Ninja</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={idea} alt="" /> 
          <h2 className={explore.title}>Elements</h2>
        </Link>
        <Link className={explore.link} to="/explore">
          <img src={settings} alt="" /> 
          <h2 className={explore.title}>Settings</h2>
        </Link>
      </section>
    </div>
  );
};

export default Explore;
