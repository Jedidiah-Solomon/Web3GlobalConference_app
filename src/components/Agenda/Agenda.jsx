import React, { useState } from "react";
import "./Agenda.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Countdown from "../Countdown/Countdown";

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const day1Schedule = [
    { time: "08:00 AM - 09:00 AM", event: "Registration and Red Carpet" },
    {
      time: "09:00 AM - 09:15 AM",
      event:
        "Opening Remarks - Introduction by the host, overview of the conference theme, and acknowledgment of sponsors and key participants.",
    },
    {
      time: "09:15 AM - 09:35 AM",
      event: `Individual Session: Blockchain in Nigeria: Unraveling the Regulatory Maze`,
    },
    {
      time: "09:35 AM - 09:55 AM",
      event:
        "Individual Session: Chain Fusion; A truly decentralised Blockchain interoperability",
    },
    {
      time: "09:55 AM - 10:35 AM",
      event: `Panel session: The Future of Finance - DeFi & TradFi `,
    },
    {
      time: "10:35 AM - 10:55 AM",
      event: `Individual Session: Web3 Goldmine: How developers can prosper in New Digital Future. `,
    },
    {
      time: "10:55 AM - 11:15 AM",
      event:
        "Individual Session: Unlocking New Revenue Streams: Monetization Strategies in a Decentralized Ecosystem.",
    },

    {
      time: "11:15 AM - 11:55 AM",
      event: `Panel Discussion: Engagement in Web3: How Marketing and Community Building Intersect.`,
    },
    {
      time: "11:55 AM - 12:15 PM",
      event:
        "Individual Session: Tokenization: The Key to Unlocking Mass Adoption in the Digital Economy.",
    },

    {
      time: "12:15 PM - 12:35 PM",
      event:
        "Individual session: CBDCs: Pros, Cons, and Their Relationship with BTC, ETH, SOL",
    },

    { time: "12:35 PM - 01:50 PM", event: "Break" }, // Break event

    {
      time: "01:50 PM - 02:30 PM",
      event: `Panel session: Interoperability and Scaling in Blockchain Networks`,
    },
    {
      time: "02:30 PM - 03:00 PM",
      event:
        "Technical session: Understanding the Concept of Gasless Dapps and How to Build One",
    },
    {
      time: "03:00 PM - 03:10 PM",
      event: "Closing Remarks and Acknowledgements",
    },
    {
      time: "03:10 PM - 04:00 PM",
      event: "Networking Mixer ",
    },
  ];

  const renderSchedule = (schedule) =>
    schedule.map((item, index) => (
      <div
        className={`schedule-item ${
          item.event === "Break" ? "break-item" : ""
        }`}
        key={index}
      >
        <h3>{item.time}</h3>
        <p>{item.event}</p>
      </div>
    ));

  return (
    <>
      <Navbar />
      <div className="agenda-container">
        <h1>Conference Agenda</h1>
        <div className="day-selector">
          <button
            className={selectedDay === "day1" ? "active" : ""}
            onClick={() => handleDayClick("day1")}
          >
            Event Day - October 26
          </button>
          <p className="duration">Duration: 09:00 AM - 4:00 PM (WAT)</p>
        </div>

        <div className="schedule-container">
          {selectedDay === "day1" && renderSchedule(day1Schedule)}
        </div>
      </div>
      <Countdown />
      <Newsletter />
    </>
  );
};

export default Agenda;
