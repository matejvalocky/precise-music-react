import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sideNavigation">
      <div className="logoAndNav">
        <div className="logoImage"></div>
        <nav>
          <ul>
            <li>
              <div className="homeIcon icon"></div> Home
            </li>
            <li>
              <div className="homeIcon icon"></div> About me
            </li>
            <li>
              <div className="homeIcon icon"></div> Mixes
            </li>
            <li>
              <div className="homeIcon icon"></div>Links
            </li>
          </ul>
        </nav>
      </div>
      <div className="linksAndYear">
        <div className="links">
          <div className="linksIcon"></div>
          <div className="linksIcon"></div>
          <div className="linksIcon"></div>
        </div>
        <div className="year">
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
