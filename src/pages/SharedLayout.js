import { Outlet } from "react-router-dom"

import SideNav from "../components/SideNav"
import Hamburger from "../Hamburger"

const SharedLayout = () => {
  return <div className="app">

  <div className="hamburger-top">
    <Hamburger />
  </div>

  <div className="siteContent">
    <SideNav></SideNav>
    <Outlet></Outlet>
  </div>
</div>
}

export default SharedLayout
