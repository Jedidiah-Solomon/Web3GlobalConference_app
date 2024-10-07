import React from "react";
import "./Speakers_2023.css";

const speakersData = [
  {
    name: "Vaibhav Ali",
    position: "Growth, Content Creator",
    image: "/img/VaibhavAli.jpeg",
  },
  {
    name: "Peter Hui",
    position: "Moongate, Co-founder",
    image: "/img/Peter_Hui.jpg",
  },
  {
    name: "Mudit Marda",
    position: "DRIFE & DexAuction, Founder",
    image: "/img/Mudit_Marda.jpg",
  },
  {
    name: "Morten Rongaard",
    position: "REALITY+, Co-Founder and CEO",
    image: "/img/Morten_Rongaard.jpg",
  },

  {
    name: "Jerop Joan",
    position: "MEMOI, Founder",
    image: "/img/Jerop_Joan.jpeg",
  },

  {
    name: "Frank Deya",
    position: "FOMOWEEKLY, Director",
    image: "/img/Frank_Deya.jpg",
  },
  {
    name: "Astha Yadav",
    position: "Zero-knowledge Advocate",
    image: "/img/Astha_Yadav.jpg",
  },
  {
    name: "Dimitri Tsapis",
    position: "FORCEFI, CMO",
    image: "/img/Dimitri_Tsapis.jpeg",
  },
  {
    name: "Moran Hertzanu Weiss",
    position: "Hedera, Founder",
    image: "/img/Moran _Hertzanu_weiss.jpg",
  },
  {
    name: "Jeff Mkungusi",
    position: "Africa Blockchain Center, CEO",
    image: "/img/Jeff_Mkungusi.jpeg",
  },
  {
    name: "Sakthi V Rajaguru",
    position: "FABC, Co-founder",
    image: "/img/Sakthi_Rajaguru.jpg",
  },
  {
    name: "Nick Majumdar",
    position: "BlockX and Tokenizer, Founder",
    image: "/img/Nick_Majumdar.jpg",
  },
  {
    name: "Nikhil Goyal",
    position: "Beyond Imagination, Founder",
    image: "/img/Nikhil_Goyal.jpeg",
  },
  {
    name: "Kaya Gulten",
    position: "PITCHTALK, Business Developer",
    image: "/img/Kaya_Gulten.jpg",
  },
  {
    name: "Pranav Agarwal",
    position: "FOUNDERSHIP, Head of Capital",
    image: "/img/Pranav.jpg",
  },
  {
    name: "Shahd Abdelhadi",
    position: "Takadao, Head of Growth",
    image: "/img/Shahd_Abdelhadi.jpg",
  },
  {
    name: "Tomal K Ganguly",
    position: "Centauri Web3 Consortium, Co-founder",
    image: "/img/Tomal_Ganguly.jpg",
  },
  {
    name: "Amando Boncales",
    position: "Althash University, CEO",
    image: "/img/amando.jpg",
  },
  {
    name: "Drew Williams",
    position: "FANFUNDR, Founder",
    image: "/img/Drew_Williams.jpeg",
  },
  {
    name: "Nicholas Weber",
    position: "THE HUB, Founder",
    image: "/img/Nicholas_Weber.jpg",
  },
];

const Speakers = () => {
  return (
    <div id="speakers" className="speakers">
      <h2>2023&#39;s Keynote Speakers</h2>
      <p>
        Exclusive mix of 2023&#39;s Speakers & Panelists: bringing together top
        industry leaders
      </p>
      <div className="speakers-container">
        {speakersData.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-image"
            />
            <h3>{speaker.name}</h3>
            <p>{speaker.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
