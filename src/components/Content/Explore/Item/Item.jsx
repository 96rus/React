import React from "react";
import { Link } from "react-router-dom";
import item from "./Item.module.css"

const Item = (props) => {
  return (
    <Link className={item.link} to="/explore">
      <img src={props.value} alt="" />
      <h2 className={item.title}>{props.title}</h2>
    </Link>
  );
};

export default Item;
