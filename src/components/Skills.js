import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css"

function Skills() {
  return (
    <div
    className="skills-container"
    >
      <Link
        to="/"
        style={{ color: "white", marginTop: "80px", marginLeft: "30px"}}
      >
        Home
      </Link>
      <p className="para">
        Clifford Hunter
        <br></br>
        Full Stack Web Developer
        <br></br>
        Dublin, GA 31021 (open to remote) | cliffordhunterjr@gmail.com |
        478-278-5647
        <br></br>
        <br></br>
        Eager professional with experience in business management and team
        development. Excited to apply full stack development and project
        management, web design, and back-end ingenuity to maximize technological
        concepts within the remote Full Stack Developer Role.
        <br></br>
        <br></br>
        EDUCATION
        <br></br>
        <br></br>
        Kenzie Academy from Southern New Hampshire University Indianapolis, IN
        (remote) Full Stack Web Development (MERN)
        <br></br>
        Expected Completion: July 2023
        <br></br>
        Completed a 9 month certificate program. The program provided hands-on
        intensive learning in both Front-End and Back-End Web Development. This
        project-based training has the ability to lay out web pages matched with
        the behind-the-scenes skills of using scripting languages, writing code,
        interacting with databases, and managing servers. Proficient in
        JavaScript, HTML, CSS, Excel, Microsoft Word, Publisher, and Web Design.
        <br></br>
        <br></br>
        SKILLS
        <br></br>
        <br></br>
        Technical Skills: JavaScript, CSS, HTML, VSCode, Github
        <br></br>
        <br></br>
        Marketable Skills: Troubleshooting, Collaboration, Organization,
        Prioritization, Effective Communicator both Oral and Written
        <br></br>
        <br></br>
        PROJECT HIGHLIGHTS
        <br></br>
        <br></br>
        Lead Developer | My First Website | HTML, CSS October
        <br></br>
        2022 Project Used HTML and CSS for website development and investigated
        needed tools and requirements for website design, using given parameters
        to complete the project.
        <br></br>
        Implemented planning skills to set up the project ensuring proper flow
        of information for the user. Located and isolated problematic strings
        inside of HTML code, and broke down the project into manageable sections
        of code for optimized completion. 
        <br></br>
        <br></br>
        WORK EXPERIENCE 
        <br></br>
        <br></br>
        Brighter Health
        <br></br>
        Medical Services Dublin, GA Chief Operating Officer 
        <br></br>
        December
        2019-November 2022 
        <br></br>
        <br></br>
        Organized Amazon Web Services database to protect
        patient information according to HIPAA standards. Established merchant
        credit/debit services through Square to provide ease of use for
        patients. 
        <br></br>
        <br></br>
        Morgan Medical Center Madison, GA Respiratory Therapist
        <br></br>
        October 2016-June 2021 
        <br></br>
        <br></br>
        Monitored respiratory status to improve lung
        function. Assisted in emergency medicine to prevent respiratory failure.
      </p>
    </div>
  );
}

export default Skills;
