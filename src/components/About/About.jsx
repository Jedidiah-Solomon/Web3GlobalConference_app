import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>What is W3GC?</h2>
      <p>
        The Web3 Global Conference is hosted by Web3 Global Conference LLC, a
        company registered and based in the USA. It is an unparalleled event
        that unites leading experts from diverse industries on a global scale.
        With a core emphasis on the future of Web3 and Blockchain, this
        conference serves as a pivotal platform for insightful discussions
        surrounding regulations, challenges, and invaluable guidance for
        companies venturing into the Web3 ecosystem. Esteemed leaders
        representing government bodies, private sectors, regulatory authorities,
        renowned experts, and the vibrant Web3 community will converge at this
        extraordinary gathering.
      </p>
      <div className="stats-container">
        <div className="stat">
          <p>
            <span>1,000+</span>
            <br />
            <span>Attendees</span>
          </p>
        </div>

        <div className="stat">
          <p>
            <span>50+</span>
            <br />
            <span>Esteemed Speakers</span>
          </p>
        </div>

        <div className="stat">
          <p>
            <span>50+</span>
            <br />
            <span>Web3 Entrepreneurs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
