import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home-page";
import About from "./pages/About-page";
import Mixes from "./pages/Mixes-page";
import Links from "./pages/Links-page";
import Error from "./pages/Error-page";
import SharedLayout from "./pages/SharedLayout";
import OneMix from "./components/OneMix";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/mixes" element={<Mixes />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/all-mixes/:mixId" element={<OneMix/>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
