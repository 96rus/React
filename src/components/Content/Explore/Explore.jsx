import React from "react";
import explore from "./Explore.module.css";
import Item from "./Item/Item";

const Explore = (props) => {

	let exploreElements = props.exploreData.map( e => <Item value={e.value} title={e.title}/>)

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
