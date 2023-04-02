import React from "react";
import cardData from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  const cardElements = cardData.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        openSpots={data.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards">{cardElements}</div>
    </>
  );
}
