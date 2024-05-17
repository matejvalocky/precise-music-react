import SideNav from "../components/SideNav"
import MainContent from "../components/MainContent"
import Hamburger from "../Hamburger"

const Home = () => {
  return <div className="app">

  <div className="hamburger-top">
    <Hamburger />
  </div>

  <div className="siteContent">
    <SideNav></SideNav>
    <MainContent></MainContent>
  </div>
</div>
}

export default Home
