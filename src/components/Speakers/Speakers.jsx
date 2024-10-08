import React from "react";
import "./Speakers.css";

const speakersData = [
  {
    name: "Chisom Felix",
    position: "Founder, Felbeth",
    image: "/img/chisom_felix.jpg",
    linkedin: "https://www.linkedin.com/in/chisom-felix-23516926b/",
  },
  {
    name: "Kingsley Peter",
    position: "Country Manager , Onramp.money (Nigeria)",
    image: "/img/kingsley_peter.jpg",
    linkedin: "https://www.linkedin.com/in/kingsley-peter-🇳🇬-a3a116204/",
  },
  {
    name: "David Ijie",
    position: " Product Manager , Zone Network",
    image: "/img/david_ijie.jpg",
    linkedin: "https://www.linkedin.com/in/david-ijie/",
  },
  {
    name: "David whyte",
    position: "Founder, Vhennus",
    image: "/img/david_whyte.jpg",
    linkedin: "https://www.linkedin.com/in/david-whyte-john-570742110/",
  },

  {
    name: "Daniel Idowu",
    position: "Technical Writer Lagrange Labs",
    image: "/img/daniel_idowu.jpg",
    linkedin: "https://www.linkedin.com/in/daniel-idowu-739b0314b/",
  },

  {
    name: "Fiyin Odebunmi",
    position: "Co Founder Helicode",
    image: "/img/fiyin_debunmi.jpeg",
    linkedin: "https://www.linkedin.com/in/fiyinodebunmi/",
  },
  {
    name: "Toluwalope Ajetunmobi",
    position: "PhD intern at Nethermind",
    image: "/img/toluwalope_ajetunmobi.png",
    linkedin: "https://www.linkedin.com/in/toluwalope-ajetunmobi/",
  },
  {
    name: "Adejumo Adefisayo",
    position: "Software Engineer and Web3.js Ambassador",
    image: "/img/adejumo_adefisayo.png",
    linkedin: "https://www.linkedin.com/in/adefisayo-adejumo/",
  },
  {
    name: "Emmanuel Tope",
    position: " Ecosystem Builder at Toronet",
    image: "/img/emmanuel_tope.jpeg",
    linkedin: "https://www.linkedin.com/in/tope-emmanuel-ogunsakin/",
  },
  {
    name: "Chimezie Chuta",
    position: "Founder Blockchain Nigeria User Group (BNUG)",
    image: "/img/chimezie_chuta.png",
    linkedin: "https://www.linkedin.com/in/chimeziechuta/",
  },
  {
    name: "Adedayo Adebajo",
    position: "Co-founder ICP.Hub Sahara West Africa",
    image: "/img/adedayo_adebajo.jpeg",
    linkedin: "https://www.linkedin.com/in/adedayo-adebajo-61b908b9/",
  },
  {
    name: "Ugochcukwu Aronu",
    position: "Founder Xend Finance",
    image: "/img/ugochcukwu_aronu.jpeg",
    linkedin: "https://www.linkedin.com/in/ugochukwu-aronu-4477a59b/",
  },
  {
    name: "Awosike Isreal Ayodeji",
    position: "Founder Web3Bridge",
    image: "/img/awosike_isreal_ayodeji.jpg",
    linkedin: "https://www.linkedin.com/in/ayodeji-awosika-69924124/",
  },
  {
    name: "Idris Olubisi",
    position: " Developer Advocate, Axelar",
    image: "/img/idris_olubisi.jpeg",
    linkedin: "https://www.linkedin.com/in/idris-olubisi/",
  },
  {
    name: "Favour Onuoha",
    position: " Senior Developer Relations Engineer at Swing Finance",
    image: "/img/favour_onuoha.jpeg",
    linkedin: "https://www.linkedin.com/in/heyonuoha/",
  },
  {
    name: "Kingsley Okonkwo",
    position:
      "Blockchain Developer and Technical Writer at Consensys Software Inc.",
    image: "/img/kingsley_okonkwo.jpeg",
    linkedin: "https://www.linkedin.com/in/bruzzy/",
  },
];

const Speakers = () => {
  return (
    <div id="speakers" className="speakers">
      <h2>Keynote Speakers and Panelists</h2>
      <p>
        An elite lineup of speakers and panelists: uniting leading experts and
        innovators from the industry.
      </p>
      <div className="speakers-container">
        {speakersData.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-image"
            />
            <h3>{speaker.name}</h3>
            <p>{speaker.position}</p>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              Connect on LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
