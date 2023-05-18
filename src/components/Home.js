import React from "react";
import "./HomeStyle.css";
// import AdobeStock_358745451 from "../images/AdobeStock_358745451.jpeg";


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
            Project-focused and passionate to bring digital dreams to reality.
          </h2>
          {/* <img className="home-pic" src={AdobeStock_291164587} alt="stage-pic"  /> */}
        </div>
        <div className="home-program-background"> </div>
        {/* <img className="home-program" src={AdobeStock_358745451} alt="programming icons"  /> */}
      </div>
    </div>
  );
}

export default Home;
