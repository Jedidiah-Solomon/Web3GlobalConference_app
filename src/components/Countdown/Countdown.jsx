import React, { useState, useEffect } from "react";
import "./Countdown.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Countdown = ({ venue }) => {
  // Set the target date to October 26th, 2024
  const getTargetDate = () => {
    const targetDate = new Date("2024-10-26T00:00:00"); // October 26th, 2024 at midnight
    return targetDate.toISOString();
  };

  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [targetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-section">
      <p className="location-text">
        <i className="fas fa-map-marker-alt"></i> The Zone, Gbagada, Lagos
        State.
      </p>
      <div className="box-content">
        <div className="time-unit">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">Mins</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">Secs</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

//https://days.to/until/26-october
