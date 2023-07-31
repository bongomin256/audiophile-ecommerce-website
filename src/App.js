//* Pages
import Home from "./ui/Home";
import Speakers from "./ui/Speakers";
import Earphones from "./ui/Earphones";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CategoryConstant from "./pages/CategoryConstant";
import Headphones from "./ui/Headphones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        {/* <Route path="/headphones/:speakerId" element={<Headphones />} /> */}
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </Router>
  );
}

export default App;
