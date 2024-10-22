import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Partners.css";

const partners = [
  { id: 1, logo: "/img/web3_africa.png", name: "Web3 Africa" },
  { id: 2, logo: "/img/teen_girls.jpeg", name: "Teen Girls" },
  { id: 3, logo: "/img/starknet_africa.png", name: "Staknet Africa" },
  { id: 4, logo: "/img/wib_africa.png", name: "Africa Blockchain Center" },
  { id: 5, logo: "/img/sippy.png", name: "Sippy" },
  { id: 6, logo: "/img/pe.png", name: "Pink Elements" },
  { id: 7, logo: "/img/palremit.png", name: "Palremit" },
  { id: 8, logo: "/img/onramp.png", name: "OnRamp" },
  { id: 9, logo: "/img/nucleusdao.jpeg", name: "Nucleusdao" },
  { id: 10, logo: "/img/medics_in_web3.jpeg", name: "Medics in web3" },
  { id: 11, logo: "/img/unchain_union.png", name: "Unchain Union" },
  { id: 12, logo: "/img/intmax.png", name: "Intmax" },
  { id: 13, logo: "/img/giva.jpeg", name: "GIVA" },
  { id: 14, logo: "/img/felbeth.jpeg", name: "Felbeth" },
  { id: 15, logo: "/img/eth_ng.png", name: "Etherum Nigeria" },
  { id: 16, logo: "/img/dsa.jpeg", name: "DSA CORP" },
  { id: 17, logo: "/img/dlt.png", name: "DLT Africa" },
  { id: 18, logo: "/img/block_space.jpeg", name: "Block Space" },
  { id: 19, logo: "/img/blockchain_4_good.png", name: "Blockchain for good" },
  { id: 20, logo: "/img/blockchain_club.jpg", name: "Blockchain Club" },
  { id: 21, logo: "/img/blasu.jpeg", name: "BLASU" },
  { id: 22, logo: "/img/based_africa.PNG", name: "Based Africa" },
  { id: 23, logo: "/img/b_chain.jpeg", name: "BCHAIN" },
  { id: 24, logo: "/img/aviation_partner.jpeg", name: "Aviation Partner" },
  { id: 25, logo: "/img/atc.png", name: "ATC" },
  { id: 26, logo: "/img/arnagon.jpg", name: "Arnagon Group" },
  { id: 27, logo: "/img/web3bridge.jpg", name: "Web3Brigde" },
  { id: 28, logo: "/img/adanian.png", name: "Adanian" },
  { id: 29, logo: "/img/abc.jpeg", name: "ABC" },

  //-----------------Previous---------------------//
  // { id: 3, logo: "/img/web3nifty.png", name: "Web3Nifty" },
  // { id: 4, logo: "/img/BlockX.png", name: "BlockX" },
  // { id: 5, logo: "/img/Nerdwarex.png", name: "NerdWarex" },
  // { id: 6, logo: "/img/reality.png", name: "Reality" },
  // { id: 7, logo: "/img/Hordanso.png", name: "Hordanso" },
  // { id: 8, logo: "/img/Pitchtalk.png", name: "Pitchtalk" },
  // { id: 9, logo: "/img/FABC.png", name: "FABC" },
  // { id: 10, logo: "/img/Centauri.png", name: "Centauri Consortium" },
  // { id: 11, logo: "/img/Ghana_Block.png", name: "Ghana Block" },
  // {
  //   id: 12,
  //   logo: "/img/Blockchain_University.png",
  //   name: "Blockchain University",
  // },

  // { id: 14, logo: "/img/Ninja_game_guild.png", name: "Ninja Game Guild" },
  // { id: 15, logo: "/img/BCH.png", name: "BCH Club" },
  // { id: 16, logo: "/img/Hammer.png", name: "Hammer" },
  // { id: 17, logo: "/img/Fomo.png", name: "Fomo" },
  // { id: 18, logo: "/img/hub.svg", name: "The Hub" },
  // { id: 19, logo: "/img/shoppleverse.png", name: "Shoppleverse" },
  // { id: 20, logo: "/img/Tokenizer.png", name: "Tokenizer" },
  // { id: 21, logo: "/img/Stacked-MoonGate.svg", name: "Moongate" },
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
    window.location.href = "#";
  };

  return (
    <div className="partners-section">
      <h2>Community Partners</h2>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </Slider>
      {/* <button className="sponsor-button" onClick={handleButtonClick}>
        Become a Partner
      </button> */}
    </div>
  );
};

export default Partners;
