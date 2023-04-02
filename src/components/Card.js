import React from "react";
import "./Card.css";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.img} alt="Profile" />
      <div className="cards--status">
        <img
          className="card--star"
          src={process.env.PUBLIC_URL + "/images/Star 1.png"}
          alt="star"
        />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &bull;</span>
        <span className="grey">{props.location}</span>
      </div>
      <p> {props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
