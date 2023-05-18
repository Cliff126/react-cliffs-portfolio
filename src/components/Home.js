import React from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="home-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <div className="home-page">
        <div className="container">
          <h2 className="home-title">
            Hi, <br></br>I'm Clifford,<br></br> Web Developer
          </h2>
          <h6 style={{ color: "white", fontSize: "15px" }}>
            Full-Stack Web Developer <br></br>
            JavaScript/MongoDB/Express/React/Node
          </h6>
          <h2 className="home-title">
            Project-focused and passionate to bring digital dreams to reality. I
            want to bring your design projects to center stage.
          </h2>
        </div>
        <footer style={{ color: "white" }}>
          <Link
            to="https://www.linkedin.com/in/cliffordlhunter"
            style={{ color: "white", maxWidth: "60px"  }}
            className="link-contact"
          >
            LinkedIn
          </Link>
          <footer>
            <Link
              to="https://github.com/Cliff126"
              style={{ color: "white", maxWidth: "50px" }}
              className="link-contact"
            >
              GitHub
            </Link>
          </footer>
        </footer>
      </div>
    </div>
  );
}

export default Home;
