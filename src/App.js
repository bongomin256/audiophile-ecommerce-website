//* Pages
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CategoryConstant from "./pages/CategoryConstant";
import Headphones from "./pages/Headphones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </Router>
  );
}

export default App;
