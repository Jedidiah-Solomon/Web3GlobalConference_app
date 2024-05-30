import React from "react";
import "./Reasons.css";

const reasonsData = [
  {
    title: "Unrivaled Speaker Lineup",
    body: "Join 50+ esteemed industry experts representing diverse sectors in the web3 ecosystem for an unparalleled knowledge-sharing experience.",
  },
  {
    title: "Elite Audience",
    body: "Immerse yourself in an intimate and highly selective networking environment, limited to 500 participants, ensuring unparalleled opportunities for quality connections.",
  },
  {
    title: "Exclusively Curated Networking",
    body: "Immerse yourself in an intimate and highly selective networking environment, limited to 500 participants, ensuring unparalleled opportunities for quality connections.",
  },
  {
    title: "Empower the Future of the Industry",
    body: "Take a proactive stance in reshaping the future of web3, driving innovation, fostering trust, and facilitating the seamless onboarding of companies and users into the web3 ecosystem..",
  },
  {
    title: "Strategic Matchmaking at its Finest",
    body: "Experience an exceptional matchmaking day tailored for esteemed venture capitalists, meticulously selected startups, and outstanding individuals, fostering valuable connections and investment opportunities.",
  },
];

const Reasons = () => {
  return (
    <div id="agenda" className="reasons">
      <h2>Reasons to Attend</h2>
      <div className="cards-container">
        {reasonsData.map((reason, index) => (
          <div key={index} className="card">
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
