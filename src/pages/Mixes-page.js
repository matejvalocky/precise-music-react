import SideNav from "../components/SideNav"
import MixesContent from "../components/MixesContent"
import Hamburger from "../Hamburger"


const Mixes = () => {
  return (
    <div className="app">

      <div className="hamburger-top">
      <Hamburger />
      </div>

      <div className="siteContent">
        <SideNav></SideNav>
        <MixesContent></MixesContent>
      </div>
    </div>
  )
}

export default Mixes
