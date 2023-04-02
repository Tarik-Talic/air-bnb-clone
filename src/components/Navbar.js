import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/images/airbnb 1.png"}
        alt="LogoImage"
      />
    </nav>
  );
}
