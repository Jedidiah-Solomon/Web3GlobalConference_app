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
      event: `Individual Session: Blockchain in Nigeria: Unraveling the Regulatory Maze - <a href="https://ng.linkedin.com/in/chimeziechuta" target="_blank">Chimezie Chuta</a>`,
    },
    {
      time: "09:35 AM - 09:55 AM",
      event:
        "Individual Session: Chain Fusion; A truly decentralised Blockchain interoperability - ICP Hub",
    },
    {
      time: "09:55 AM - 10:35 AM",
      event: `Panel session: The Future of Finance - DeFi & TradFi - <a href="https://www.linkedin.com/in/chisom-felix-23516926b" target="_blank">SomethCrypto</a>,
<a href="https://www.linkedin.com/in/kingsley-peter-a3a116204" target="_blank">Kingsley Peter</a>,
<a href="https://www.linkedin.com/in/david-ijie" target="_blank">David Ijie</a>,
<a href="https://www.linkedin.com/in/david-whyte-john-570742110" target="_blank">David whyte</a> `,
    },
    {
      time: "10:35 AM - 10:55 AM",
      event: `Individual Session: Web3 Goldmine: How developers can prosper in New Digital Future - <a href="https://www.linkedin.com/in/ayodeji-awosika-69924124" target="_blank">Ayodeji</a> `,
    },
    {
      time: "10:55 AM - 11:15 AM",
      event:
        "Individual Session: Unlocking New Revenue Streams: Monetization Strategies in a Decentralized Ecosystem. - Ugochukwu Aronu",
    },

    //-----------------//

    {
      time: "11:15 AM - 11:55 AM",
      event: `Panel Discussion: Regulatory Challenges in the Blockchain Industry -  Emmanuel tope, 
<a href="https://www.linkedin.com/in/adefisayo-adejumo" target="_blank">Adejumo Adefisayo</a>`,
    },
    {
      time: "11:55 AM - 12:15 PM",
      event:
        "Individual Session: Tokenization: The Key to Unlocking Mass Adoption in the Digital Economy - Idris",
    },

    {
      time: "12:15 PM - 12:35 PM",
      event:
        "Individual session: CBDCs: Pros, Cons, and Their Relationship with BTC, ETH, SOL Favor Onuoha (Ghana)",
    },

    ///--------------------//

    { time: "12:35 PM - 01:50 PM", event: "Break" }, // Break event

    {
      time: "01:50 PM - 02:30 PM",
      event: `Panel session: Interoperability and Scaling in Blockchain Networks - <a href="https://rw.linkedin.com/in/fiyinodebunmi" target="_blank">Fiyin Odebunmi</a>,
<a href="https://www.linkedin.com/in/daniel-idowu-739b0314b" target="_blank">Daniel Idowu</a>,
<a href="https://www.linkedin.com/in/toluwalope-ajetunmobi" target="_blank">Toluwalope Ajetunmobi</a>`,
    },
    {
      time: "02:30 PM - 03:00 PM",
      event:
        "Technical session: Understanding the Concept of Gasless Dapps and How to Build One - Kingsley Okonkwo (U.A.E)",
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
        {/* Using dangerouslySetInnerHTML to render HTML content */}
        <p dangerouslySetInnerHTML={{ __html: item.event }}></p>
      </div>
    ));

  return (
    <>
      <Navbar />
      <div className="agenda-container">
        <h1>Conference Agenda</h1>
        <p className="duration">Duration: 09:00 AM - 4:00 PM (WAT)</p>
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
      <Countdown />
      <Newsletter />
    </>
  );
};

export default Agenda;
