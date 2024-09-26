import "./Hamburger.css";
import "./components/HamburgerQueries.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Hamburger = () => {
  const checkboxRef = useRef(null);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <div className="hamburgerMenu">
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input 
              className="checkbox" 
              type="checkbox" 
              name="" 
              id="" 
              ref={checkboxRef} 
            />
            
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  

            <h1>Precise Music Official Website</h1>
            <div className="logoImage logoNav"></div>

            <div className="menu-items">
              <li><Link to="/" className="menuLink menuLinkHamburger" onClick={handleClick}><div className="homeIcon icon hamburgerIcon"></div><p>Home</p></Link></li>
              <li><Link to="/about" className="menuLink menuLinkHamburger" onClick={handleClick}><div className="aboutIcon icon hamburgerIcon"></div><p>About</p></Link></li>
              <li><Link to="/mixes" className="menuLink menuLinkHamburger" onClick={handleClick}><div className="musicIcon icon hamburgerIcon"></div><p>Mixes</p></Link></li>
              <li><Link to="/links" className="menuLink menuLinkHamburger" onClick={handleClick}><div className="linksIconNav icon hamburgerIcon"></div><p>Links</p></Link></li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hamburger;
