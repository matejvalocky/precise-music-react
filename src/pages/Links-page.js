import SideNav from "../components/SideNav"
import LinksContent from "../components/LinksContent"
import Hamburger from "../Hamburger"


const Links = () => {
  return <div className="app">

  <div className="hamburger-top">
    <Hamburger />
  </div>

  <div className="siteContent">
    <SideNav></SideNav>
    <LinksContent></LinksContent>
  </div>
</div>
}

export default Links
