import React, { useState, useEffect } from "react";
import "./PastEvents.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Speakers_2023 from "../Speakers/Speakers_2023";

const PastEvents = () => {
  useEffect(() => {
    document.title = "W3GC | Past Events";
  }, []);

  return (
    <>
      <Navbar />
      <Speakers_2023 />
      <Newsletter />
    </>
  );
};

export default PastEvents;
