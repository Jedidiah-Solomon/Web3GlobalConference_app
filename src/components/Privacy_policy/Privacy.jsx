import React, { useEffect } from "react";
import "../Privacy_policy/Privacy.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
// import Countdown from "../Countdown/Countdown";

const Privacy = () => {
  useEffect(() => {
    document.title = "W3GC | Privacy Policy";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1>Conference Privacy Policy</h1>
        <p>Welcome to Web3 Global Conference</p>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Web3 Global Conference.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Web3 Global Conference if you do
          not agree to take all of the terms and conditions stated on this page.
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client’s
          needs in respect of provision of the Company’s stated services, in
          accordance with and subject to, prevailing law of Nigeria. Any use of
          the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to the same.
        </p>
        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Web3 Conference, you agreed
          to use cookies in agreement with the Web3 Global Conference Privacy
          Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user’s
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <h2>License</h2>
        <p>
          Unless otherwise stated, Web3 Global Conference and/or its licensors
          own the intellectual property rights for all material on Web3
          Conference. All intellectual property rights are reserved. You may
          access this from Web3 Conference for your own personal use subject to
          restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from Web3 Conference</li>
          <li>Sell, rent or sub-license material from Web3 Conference</li>
          <li>Reproduce, duplicate or copy material from Web3 Conference</li>
          <li>Redistribute content from Web3 Conference</li>
        </ul>
      </main>
      {/* <Countdown /> */}
      <Newsletter />
    </>
  );
};

export default Privacy;
