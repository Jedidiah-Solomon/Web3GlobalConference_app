import React, { useState } from "react";
import "./PastEvents.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Speakers_2023 from "../Speakers/Speakers_2023";

const PastEvents = () => {
  return (
    <>
      <Navbar />
      <Speakers_2023 />
      <Newsletter />
    </>
  );
};

export default PastEvents;
