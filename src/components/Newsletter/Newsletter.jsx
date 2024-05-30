import React, { useState } from "react";
import "./Newsletter.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Newsletter = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  const currentYear = new Date().getFullYear();
  const formspreeUrl = process.env.FORMSPREE_URL;

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="follow-us">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://twitter.com/web3globalconf?t=DO2bQ7yPiiKRswqQBH1jKQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/web3-global-conference/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://t.me/wgc2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
        <div className="newsletter-form-container">
          <h2>W3GC NEWSLETTER</h2>
          <form
            action={formspreeUrl}
            method="POST"
            onSubmit={handleSubmit}
            className="newsletter-form"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter email address..."
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
          {status === "SUCCESS" && (
            <p className="success-message">Thank you for subscribing!</p>
          )}
          {status === "ERROR" && (
            <p className="error-message">
              There was an error submitting the form.
            </p>
          )}
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          © {currentYear} W3GC by Web Global Conference LLC. All rights
          reserved.{" "}
          <a id="footer-links" href="/privacy">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a id="footer-links" href="/terms">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
