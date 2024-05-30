import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";

const partners = [
  { id: 1, logo: "/img/Tokenizer.png", name: "Tokenizer" },
  { id: 2, logo: "/img/Stacked-MoonGate.svg", name: "Moongate" },
  { id: 3, logo: "/img/web3nifty.png", name: "Web3Nifty" },
  { id: 4, logo: "/img/BlockX.png", name: "BlockX" },
  { id: 5, logo: "/img/NerdWarex.png", name: "NerdWarex" },
  { id: 6, logo: "/img/reality.png", name: "Reality" },
  { id: 7, logo: "/img/Hordanso.png", name: "Hordanso" },
  { id: 8, logo: "/img/Pitchtalk.png", name: "Pitchtalk" },
  { id: 9, logo: "/img/FABC.png", name: "FABC" },
  { id: 10, logo: "/img/Centauri.png", name: "Centauri Consortium" },
  { id: 11, logo: "/img/Ghana_Block.png", name: "Ghana Block" },
  {
    id: 12,
    logo: "/img/Blockchain_University.png",
    name: "Blockchain University",
  },
  { id: 13, logo: "/img/wib_africa.png", name: "Africa Blockchain Center" },
  { id: 14, logo: "/img/Ninja_game_guild.png", name: "Ninja Game Guild" },
  { id: 15, logo: "/img/BCH.png", name: "BCH Club" },
  { id: 16, logo: "/img/Hammer.png", name: "Hammer" },
  { id: 17, logo: "/img/Fomo.png", name: "Fomo" },
  { id: 18, logo: "/img/hub.svg", name: "The Hub" },
  { id: 19, logo: "/img/shoppleverse.png", name: "Shoppleverse" },
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSc-ieND9GPFt1SHou0vVDRGy1Kh6YTPoM3SJvO0QIUFx_Qoww/viewform";
  };

  return (
    <div className="partners-section">
      <h2>Official Partners</h2>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </Slider>
      <button className="sponsor-button" onClick={handleButtonClick}>
        Become a Sponsor
      </button>
    </div>
  );
};

export default Partners;
