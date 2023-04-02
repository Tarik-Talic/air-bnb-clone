import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
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
