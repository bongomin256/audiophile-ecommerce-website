//* Pages
import Home from "./ui/Home";
import Speakers from "./ui/Speakers";
import Earphones from "./ui/Earphones";
import HeadphonesDetailPage from "./components/UiScences/DetailPages/HeadphonesDetailPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphones from "./ui/Headphones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones/:id" element={<HeadphonesDetailPage />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </Router>
  );
}

export default App;
