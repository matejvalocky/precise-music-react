import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home-page"
import About from "./pages/About-page"
import Mixes from "./pages/Mixes-page"
import Links from "./pages/Links-page"
import Error from "./pages/Error-page"


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/mixes" element={<Mixes />}></Route>
      <Route path="/links" element={<Links/>}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App

