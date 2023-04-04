import React from "react";
import cardData from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards">{cardElements}</div>
    </>
  );
}
