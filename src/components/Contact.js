import React from "react";
import "./ContactStyle.css";
import "../App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      className="home-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <Link
        to="/"
        style={{ color: "white", marginTop: "80px", textDecoration: "none" }}
        className="link-home"
      >
        Home
      </Link>
      <h1 className="header-contact" style={{ color: "white" }}>
        Hello
      </h1>
      <br></br>
      <br></br>
      <p className="contact-para">
        I can help you build and design your next project. Let me know what you
        need. Send me a message and we will get started.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <p className="link-container">
        <br></br>
        <Link href="mailto:cliffordhunterjr@gmail.com" className="link-contact">
          cliffordhunterjr@gmail.com
        </Link>
        <br></br>
        <Link
          to="https://www.linkedin.com/in/cliffordlhunter"
          className="link-contact"
        >
          LinkedIn
        </Link>
      </p>
    </div>
  );
}

export default Contact;
