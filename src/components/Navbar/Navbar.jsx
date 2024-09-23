import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="/img/logo.png" alt="Logo" />
          <span>Web3GlobalConference</span>
        </a>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOCFyt6izfrUbp0JCyvoP9TGRKAnK5LERjmbD35WMsTIl-Jg/viewform">
              BE A SPEAKER
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-ieND9GPFt1SHou0vVDRGy1Kh6YTPoM3SJvO0QIUFx_Qoww/viewform">
              Become a Sponsor
            </a>
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
          <li>
            <a href="https://lu.ma/bt3rglyx ">
              BOOK A TICKET
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
