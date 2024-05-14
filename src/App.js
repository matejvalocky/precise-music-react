
// import SideNav from "./components/SideNav"
// import MainContent from "./components/MainContent"




// const App = () => {
//   return (
//     <div className="app">
//      <SideNav></SideNav>
//      <MainContent></MainContent>
//     </div>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Mixes from "./pages/Mixes"
import Links from "./pages/Links"


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/mixes" element={<Mixes />}></Route>
      <Route path="/Links" element={<Links/>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App

