import React, { useState, useEffect } from 'react';
import "./Countdown.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Countdown = ({ venue }) => {
  // Calculate the target date which is 30 days from now
  const getTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now.getTime() + 65 * 24 * 60 * 60 * 1000); // 30 days from now
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
        seconds: Math.floor((difference / 1000) % 60)
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
    <div className='countdown-section'>
      <p className='font-size= 50px'><i className="fas fa-map-marker-alt"></i>The Zone, Gbagada, Lagos State.</p>
      <div className='box-content'>
        <div className='time-unit'>
          <div className='time-value'>{timeLeft.days}</div>
          <div className='time-label'>Days</div>
        </div>
        <div className='time-unit'>
          <div className='time-value'>{timeLeft.hours}</div>
          <div className='time-label'>Hours</div>
        </div>
        <div className='time-unit'>
          <div className='time-value'>{timeLeft.minutes}</div>
          <div className='time-label'>Mins</div>
        </div>
        <div className='time-unit'>
          <div className='time-value'>{timeLeft.seconds}</div>
          <div className='time-label'>Secs</div>
        </div>
      </div>
    </div>
  );
};
// Here we go

export default Countdown;
