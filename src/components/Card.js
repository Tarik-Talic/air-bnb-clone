import React from "react";
import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} alt="Profile" />
      <div className="cards--status">
        <img
          className="card--star"
          src={process.env.PUBLIC_URL + "/images/Star 1.png"}
          alt="star"
        />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) &bull;</span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p> {props.item.title}</p>
      <p>
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  );
}
