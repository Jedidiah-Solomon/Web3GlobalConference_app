import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MediaPartners.css";

const media_partners = [
  { id: 1, logo: "/img/tech_next.png", name: "TechNext" },
];

const MediaPartners = () => {
  const settings = {
    dots: false,
    infinite: media_partners.length > 1,
    speed: 500,
    slidesToShow: media_partners.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(media_partners.length, 1),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(media_partners.length, 1),
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
    <div className="media-partners-section">
      <h2>Media Partner</h2>
      <Slider {...settings}>
        {media_partners.map((media_partner) => (
          <div key={media_partner.id} className="media-partner-logo">
            <img src={media_partner.logo} alt={media_partner.name} />
          </div>
        ))}
      </Slider>
      {/* <button className="media-partner-button" onClick={handleButtonClick}>
        Become a Partner
      </button> */}
    </div>
  );
};

export default MediaPartners;
