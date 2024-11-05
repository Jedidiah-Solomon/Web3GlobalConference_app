import React, { useState, useEffect } from "react";
import "./Hero.css";
import image1 from "../../../public/img/image1.png";
import image2 from "../../../public/img/image2.png";
import image3 from "../../../public/img/image3.png";

const heroData = [
  { text1: "Web 3 Global Conference", image: image1 },
  { text1: "The Future is decentralized", image: image2 },
  { text1: "Join us for insights and networking", image: image3 },
];

const Hero = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img
        src={heroData[heroCount].image}
        className="background"
        alt="Hero Background"
      />
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
      </div>
      <div className="marquee-container">
        <span className="marquee-text">
          <span id="date-span">2025 Edition:</span> Planning is underway. Reach
          out for partnership opportunities.
        </span>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {heroData.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot dotbg" : "hero-dot"}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
