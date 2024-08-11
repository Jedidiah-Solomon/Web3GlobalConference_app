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
    { time: "09:00 AM - 09:15 AM", event: "Opening Remarks" },
    {
      time: "09:15 AM - 09:45 AM",
      event:
        "Keynote Address: Blockchain in Nigeria: Unraveling the Regulatory Maze",
    },
    {
      time: "09:45 AM - 10:25 AM",
      event:
        "Panel Discussion: Regulatory Challenges in the Blockchain Industry",
    },
    {
      time: "10:25 AM - 10:55 AM",
      event: "Fireside Chat: The Future of Finance - DeFi & TradFi",
    },
    {
      time: "10:55 AM - 11:15 AM",
      event:
        "Roundtable Chat: Interoperability and Scaling in Blockchain Networks",
    },
    {
      time: "11:15 AM - 11:45 PM",
      event:
        "Keynote Address: The Fundamentals of Blockchain and the Evolution of Bitcoin",
    },
    { time: "11:45 AM - 12:15 PM", event: "Break" }, // Break event
    {
      time: "12:15 PM - 12:45 PM",
      event: "Panel Discussion: Security in a Decentralized Environment",
    },
    {
      time: "12:45 PM - 1:15 PM",
      event:
        "Keynote Address: Exploring the Role of Stablecoins: Necessity, Alternatives, and the Future of On-Chain Retail Banking",
    },
    {
      time: "1:15 PM - 1:45 PM",
      event:
        "Keynote Address: CBDCs: Pros, Cons, and Their Relationship with BTC, ETH, SOL",
    },
    {
      time: "1:45 PM - 2:15 PM",
      event:
        "Keynote Address: Tokenization: The Key to Unlocking Mass Adoption in the Digital Economy",
    },
    {
      time: "2:15 PM - 2:25 PM",
      event: "Closing Remarks and Acknowledgements",
    },
    { time: "2:25 PM - 4:00 PM", event: "Networking Mixer" },
  ];

  const day2Schedule = [{ time: "Day 2", event: "Dinner and VC Pitching" }];

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
            Day 1 - October 26
          </button>
          <button
            className={selectedDay === "day2" ? "active" : ""}
            onClick={() => handleDayClick("day2")}
          >
            Day 2 - October 27
          </button>
        </div>

        <div className="schedule-container">
          {selectedDay === "day1" && renderSchedule(day1Schedule)}
          {selectedDay === "day2" && renderSchedule(day2Schedule)}
        </div>
      </div>
      <Newsletter />
      <Countdown />
    </>
  );
};

export default Agenda;
