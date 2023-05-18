import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdobeStock_430723045 from '../images/AdobeStock_430723045.jpeg'
import './NavBarComponentStyle.css'
// import IMG_4579 from '../images/IMG_4579.jpeg'


function NavBarComponent() {
  const[click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar"  >
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="clickable-icon" src={AdobeStock_430723045} alt="Letter C" />
        </Link>
        <div className="menu-icon"  onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />
        </div>
        <div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
                My Skills
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
                Portfolio
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="name">CLIFFORD</h4>
        <h6 className="job-title">WEB DEVELOPER</h6>
        {/* <nav className="mr-auto" id="align-header">
        <Link className="link" to="/about" style={{color: "white", textDecoration: "none", fontSize: "larger", padding: "25px"}} >About</Link>
        <Link className="link" to="/skills" style={{color: "white", textDecoration: "none", fontSize: "larger", padding: "25px"}} >My Skills</Link>
        <Link className="link" to="/portfolio" style={{color: "white", textDecoration: "none", fontSize: "larger", padding: "25px"}} >Portfolio</Link>
        <Link className="link" to="/contact" style={{color: "white", textDecoration: "none", fontSize: "larger", padding: "25px"}} >Contact</Link>
        </nav> */}
        {/* <NavDropdown title="Hello" id="basic-nav-dropdown">
          <Navbar.Brand>Hello</Navbar.Brand>
        </NavDropdown> */}
        {/* <img className="portrait" src={IMG_4579} alt="portrait" /> */}
        </div>
        </nav>
    </>
  );
  //     <>
  // <nav className = "navbar">
  //     <div className='navbar-container'>
  //         <Link to="/" className="navbar"></Link>
  //     </div>
  // </nav>
  //     </>
}

export default NavBarComponent;
