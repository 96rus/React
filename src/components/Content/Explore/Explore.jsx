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
	let exploreData = [
		{value: feed, title: 'Feed'},
		{value: friends, title: 'Friends'},
		{value: videos, title: 'Videos'},
		{value: tagEuro, title: 'Pages'},
		{value: cart, title: 'Commerce'},
		{value: house, title: 'Interests'},
		{value: chrono, title: 'Stories'},
		{value: question, title: 'Questions'},
		{value: news, title: 'Groups'},
		{value: cake, title: 'News'},
		{value: envato, title: 'Envato'},
		{value: calendar, title: 'Events'},
		{value: pin, title: 'CSS Ninja'},
		{value: idea, title: 'Elements'},
		{value: settings, title: 'Settings'},
	]

  return (
    <section>
      <h1 className="title">Explore</h1>
      <div className={explore.container}>
        <Item value={exploreData[0].value} title={exploreData[0].title}/>
        <Item value={exploreData[1].value} title={exploreData[1].title}/>
        <Item value={exploreData[2].value} title={exploreData[2].title}/>
        <Item value={exploreData[3].value} title={exploreData[3].title}/>
        <Item value={exploreData[4].value} title={exploreData[4].title}/>
        <Item value={exploreData[5].value} title={exploreData[5].title}/>
        <Item value={exploreData[6].value} title={exploreData[6].title}/>
        <Item value={exploreData[7].value} title={exploreData[7].title}/>
        <Item value={exploreData[8].value} title={exploreData[8].title}/>
        <Item value={exploreData[9].value} title={exploreData[9].title}/>
        <Item value={exploreData[10].value} title={exploreData[10].title}/>
        <Item value={exploreData[11].value} title={exploreData[11].title}/>
        <Item value={exploreData[12].value} title={exploreData[12].title}/>
        <Item value={exploreData[13].value} title={exploreData[13].title}/>
        <Item value={exploreData[14].value} title={exploreData[14].title}/>
      </div>
    </section>
  );
};

export default Explore;
