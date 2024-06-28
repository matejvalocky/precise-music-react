import "./SideNav.css";
import "./SideNavQueries.css"


import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="sideNavigation">
      <div className="logoAndNav">
        <div className="logoImage">
          <div className="opacityBlock">
            <h2>Drum and Bass Mixes</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="menuLink"><div className="homeIcon icon"></div><p>Home</p></NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menuLink"><div className="aboutIcon icon"></div><p>About</p></NavLink>
            </li>
            <li>
              <NavLink to="/mixes" className="menuLink"><div className="musicIcon icon"></div><p>Mixes</p> </NavLink>
            </li>
            <li>
              <NavLink to="/links" className="menuLink"><div className="linksIconNav icon"></div> <p>Links</p></NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="linksAndYear">
        <div className="links">
          <a href="https://www.youtube.com/@PreciseMusic/videos" target="_blank"  rel="noreferrer">
            <div className="linksIcon youtubeIcon"></div>
          </a>
          <a href="https://www.house-mixes.com/profile/PreciseMusic" target="_blank"  rel="noreferrer">
            <div className="linksIcon housemixesIcon"></div>
          </a>
          <a href="https://www.mojevideo.sk/u/precisemusic/" target="_blank"  rel="noreferrer">
            <div className="linksIcon mojevideoIcon"></div>
          </a>
        </div>
        <div className="year">
          <p>2024</p>
          <a href="https://preview.themeforest.net/item/watson-vcard-resume-cv-portfolio-template/full_screen_preview/22526409" target="_blank" rel="noreferrer">Template</a> <br />
          <a href="https://www.flaticon.com/" target="_blank"  rel="noreferrer">Icons</a> <br />
          <a href="https://codepen.io/alvarotrigo/pen/wvrzPWL" target="_blank"  rel="noreferrer">Hamburger menu</a> <br />
          <a href="https://react-slideshow-image.netlify.app/?path=/story/introduction--page" target="_blank"  rel="noreferrer">React Slideshow</a> <br />
          <a href="https://www.freepik.com/free-ai-image/black-orange-background-with-wavy-pattern_42539426.htm#fromView=search&page=1&position=25&uuid=29cc97e2-4d83-4557-83f6-a4448bdd01d5" target="_blank"  rel="noreferrer">Background image</a>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
