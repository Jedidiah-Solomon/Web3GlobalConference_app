import React, { useEffect } from "react";

import "./ovalpay.css";

export default function OvalPay() {
  useEffect(() => {
    document.title = "Download OvalPay ";
  }, []);

  return (
    <div className="landing-container">
      <div className="logo">
        <img src="https://i.ibb.co/0jZCR2ch/ovalpay-logo.png" alt="OvalPay" />
      </div>

      <div className="powered-by">
        Powered by <span className="OvalPay-logo">Web3Global</span>
      </div>

      <div className="object object-1"></div>
      <div className="object object-2"></div>
      <div className="object object-3"></div>
      <div className="object object-4"></div>
      <div className="object object-5"></div>

      <div className="main-content">
        <h1 className="headline">
          Seamless Onramp & Offramp for <span className="dot">•</span>
          <br />
          Effortless Crypto Transactions
          <br />
          with OvalPay Mobile App
        </h1>

        <div className="download-section">
          <button className="download-button">
            <span className="play-icon">▶</span>{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.web3global.ovalpay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download OvalPay on Android
            </a>
          </button>
          <p className="ios-link">
            <a
              href="https://apps.apple.com/us/app/web3global-ovalpay/id2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on iOS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
