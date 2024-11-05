import React, { useEffect } from "react";
import "../Terms_of_use/Terms.css";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
// import Countdown from "../Countdown/Countdown";

const Terms = () => {
  useEffect(() => {
    document.title = "W3GC | T&C";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1>Terms and Conditions</h1>

        <h2>Welcome to Web3 Global Conference</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Web3 Global Conference.
        </p>
        <p>
          Web3 Global Conference reserves the right to monitor all Comments and
          to remove any Comments which can be considered inappropriate,
          offensive or causes breach of these Terms and Conditions.
        </p>

        <h3>You warrant and represent that:</h3>
        <ul>
          <li>You are entitled to post the Comments on our website and...</li>
          <li>The Comments do not invade any intellectual property right...</li>
          <li>
            The Comments do not contain any defamatory, libelous, offensive...
          </li>
          <li>
            The Comments will not be used to solicit or promote business...
          </li>
        </ul>

        <h3>Hyperlinking to our Content</h3>
        <p>
          The following organizations may link to our Website without prior
          written approval...
        </p>
        {/* Add more content here */}

        <h3>Iframes</h3>
        <p>
          Without prior approval and written permission, you may not create
          frames around our Web Pages...
        </p>
        {/* Add more content here */}

        <h3>Content Liability</h3>
        <p>
          We shall not be held responsible for any content that appears on your
          Website...
        </p>
        {/* Add more content here */}

        {/* Add more sections as necessary */}

        <h3>Refund Policy</h3>
        <p>
          If you are not satisfied with our content, forget to cancel your
          subscription or want to return the ticket to Web3 Global Conference
          events...
        </p>

        <h3>Contacts</h3>
        <p>
          <a href="mailto:info@web3globalconference.com">
            info@web3globalconference.com
          </a>
        </p>
      </main>
      {/* <Countdown /> */}
      <Newsletter />
    </>
  );
};

export default Terms;
