import "./Hamburger.css"
import "./components/HamburgerQueries.css"

import { Link } from "react-router-dom"

import logoImage from "./LOGO-240.png"



const Hamburger = () => {
  return (
    <div className="hamburgerMenu">
      <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="logo">
           <img src={logoImage} alt="" />
          </div>
          <div className="menu-items">
            <li> <Link to="/" className="menuLink"><div className="homeIcon icon"></div><p>Home</p></Link></li>
            <li> <Link to="/about" className="menuLink"><div className="aboutIcon icon"></div><p>About</p></Link></li>
            <li> <Link to="/mixes" className="menuLink"><div className="musicIcon icon"></div><p>Mixes</p> </Link></li>
            <li> <Link to="/links" className="menuLink"><div className="linksIconNav icon"></div> <p>Links</p></Link></li>

            {/* <li><a href="#">contact</a></li> */}
          </div>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Hamburger
