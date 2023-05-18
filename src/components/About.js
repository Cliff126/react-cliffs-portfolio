import React from "react";
import IMG_4579 from "../images/IMG_4579.jpeg";
import "./AboutStyle.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="about-container"
   
    >
      <div className="text-container">
        <Link to="/" style={{ color: "black", marginTop: "80px", textDecoration: "none" }} className="link-home">
          Home
        </Link>
        <br></br>
        <br></br>
        <h1 style={{ color: "black" }}>About</h1>
        <br></br>
        <h3 style={{ color: "black", fontSize: "20px" }}>
          I am a builder, creator, and problem solver.
        </h3>
        <br></br>
        <br></br>
        <p>
          I have taken a non-traditional journey, which has given me numerous
          skills to build on in web development. My twists and turns started in
          healthcare and eventually led to contracting in Fatherhood social
          programs.
        </p>
        <br></br>
        <p>
          Fast forward to 2023 and I'm at the next turn, working my passion, Web
          Development. I have worked with MERN, including client interactive
          applications. Every project has been thoughtfully considered and
          finished in a timely manner. Learning new methods of design and
          animation excite and push me to be the version of my developer self.
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
