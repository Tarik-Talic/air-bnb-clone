import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero--photo"
        src={process.env.PUBLIC_URL + "/images/Group 77.png"}
        alt="Hero "
      />
      <h1 className="hero--header">Online Experiences</h1>

      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving
        home.
      </p>
    </section>
  );
}
