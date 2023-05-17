import React from "react";
import IMG_4579 from "../images/IMG_4579.jpeg";
import AboutStyle from "./AboutStyle.css";

function About() {
  return (
    <div
      className="about-container"
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <img className="portrait" src={IMG_4579} alt="portrait" />

      <div className="text-container">
        <h1 style={{ color: "white" }}>About</h1>
        <br></br>
        <h3 style={{ color: "white", fontSize: "20px" }}>
          I am a builder, creator, and problem solver.
        </h3>
        <br></br>
        <br></br>
        <p>
          I have taken a non-traditional journey, which has given me numerous
          skills to build on in web development. I've taken some twists and
          turns, starting in healthcare and contracting in Fatherhood social
          programs.
        </p>
        <br></br>
        <p>
          Fast forward to 2023 and I'm at the next turn, working my passion, Web
          Development. I have worked with MERN, including client interactive
          applications. Every project has been thoughtfully considered and
          finished in a timely manner.
        </p>
        <br></br>
        <p>
          I enjoy experiencing moments with family and hobby farming during the
          day. Thanks for taking time to learn more about me. Please feel free
          to reach out!
        </p>
      </div>
    </div>
  );
}

export default About;
