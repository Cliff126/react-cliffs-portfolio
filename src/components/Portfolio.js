import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div
      className="home-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginTop: "80px",
          fontSize: "20px",
        }}
        className="link-home"
      >
        Home
      </Link>
      <p
        style={{
          color: "white",
          textDecoration: "none",
          marginTop: "80px",
          maxWidth: "400px",
          fontSize: "30px",
          marginLeft: "60px",
        }}
      >
        Check back periodically for new amazing projects.
      </p>
    </div>
  );
}

export default Portfolio;
