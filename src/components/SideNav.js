import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sideNavigation">
      <div className="logoAndNav">
        <div className="logoImage">
          <div className="opacityBlock">
            <h2>Drum and Bass Mixes</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <div className="homeIcon icon"></div> Home
            </li>
            <li>
              <div className="aboutIcon icon"></div> About me
            </li>
            <li>
              <div className="musicIcon icon"></div> Mixes
            </li>
            <li>
              <div className="linksIconNav icon"></div>Links
            </li>
          </ul>
        </nav>
      </div>
      <div className="linksAndYear">
        <div className="links">
          <a href="https://www.youtube.com/@PreciseMusic/videos" target="_blank">
            <div className="linksIcon youtubeIcon"></div>
          </a>
          <a href="https://www.house-mixes.com/profile/PreciseMusic" target="_blank">
            <div className="linksIcon housemixesIcon"></div>
          </a>
          <a href="https://www.mojevideo.sk/u/precisemusic/" target="_blank">
            <div className="linksIcon mojevideoIcon"></div>
          </a>
        </div>
        <div className="year">
          <p>2024</p>
          {/* <a href="https://preview.themeforest.net/item/watson-vcard-resume-cv-portfolio-template/full_screen_preview/22526409" target="_blank">Template</a> <br />
          <a href="https://www.flaticon.com/" target="_blank">Icons</a> */}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
