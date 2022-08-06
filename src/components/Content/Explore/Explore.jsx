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

	let exploreElements = exploreData.map( e => <Item value={e.value} title={e.title}/>)

  return (
    <section>
      <h1 className="title">Explore</h1>
      <div className={explore.container}>
				{exploreElements}
      </div>
    </section>
  );
};

export default Explore;
