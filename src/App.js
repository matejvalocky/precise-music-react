import Home from "./pages/Home-page";
import About from "./pages/About-page";
import Mixes from "./pages/Mixes-page";
import Links from "./pages/Links-page";
import Error from "./pages/Error-page";
import SharedLayout from "./pages/SharedLayout";
import OneMovie from "./components/OneMovie"

import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/mixes" element={<Mixes />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/all-movies/:movieId" element={<OneMovie />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
