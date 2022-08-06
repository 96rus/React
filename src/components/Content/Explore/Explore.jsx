import React from "react";
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
import Item from "./Item/Item";

const Explore = () => {
  return (
    <section>
      <h1 className="title">Explore</h1>
      <div className={explore.container}>
        <Item value={feed} title={'Feed'}/>
        <Item value={friends} title={'Friends'}/>
        <Item value={videos} title={'Videos'}/>
        <Item value={tagEuro} title={'Pages'}/>
        <Item value={cart} title={'Commerce'}/>
        <Item value={house} title={'Interests'}/>
        <Item value={chrono} title={'Stories'}/>
        <Item value={question} title={'Questions'}/>
        <Item value={news} title={'News'}/>
        <Item value={cake} title={'Groups'}/>
        <Item value={envato} title={'Envato'}/>
        <Item value={calendar} title={'Events'}/>
        <Item value={pin} title={'CSS Ninja'}/>
        <Item value={idea} title={'Elements'}/>
        <Item value={settings} title={'Settings'}/>
      </div>
    </section>
  );
};

export default Explore;
