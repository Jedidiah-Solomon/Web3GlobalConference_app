import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sponsors.css";

const sponsors = [
  { id: 1, logo: "/img/icp_hub.jpeg", name: "ICP HUB" },
  { id: 2, logo: "/img/ton_society.png", name: "TON SOCIETY" },
  { id: 2, logo: "/img/wizzwoods_game.jpg", name: "Wizz Woods Game" },
];

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sponsors.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(sponsors.length, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(sponsors.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleButtonClick = () => {
    window.location.href = "#";
  };

  return (
    <div className="sponsors-section">
      <h2>Official Sponsors</h2>
      <Slider {...settings}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-logo">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </Slider>
      {/* <button className="sponsor-button" onClick={handleButtonClick}>
        Become a Sponsor
      </button> */}
    </div>
  );
};

export default Sponsors;
