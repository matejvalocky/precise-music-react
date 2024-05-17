import SideNav from "../components/SideNav"
import AboutContent from "../components/AboutContent"
import Hamburger from "../Hamburger"


const About = () => {
  return <div className="app">

  <div className="hamburger-top">
    <Hamburger />
  </div>

  <div className="siteContent">
    <SideNav></SideNav>
    <AboutContent></AboutContent>
  </div>
</div>
  
}

export default About
