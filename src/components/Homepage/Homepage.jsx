import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <Hero />
    </div>
  );
};

export default Homepage;
