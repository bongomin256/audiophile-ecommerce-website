import { useState } from "react";
import data from "./data.json";
//* Pages
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
// import HeadphonesDetailPage from "./components/UiScences/HeadphonesDetails/XX99MarkTwoDetail";
import XX99MarkTwoDetail from "./components/UiScences/HeadphonesDetails/XX99MarkTwoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphones from "./pages/Headphones";

import newCategoriesName from "./utils/productCategoryNames";
import CategoriesPages from "./pages/allCategoriesPages/AllCategories";
// import AllCategoriesProductDetailPages from "./pages/detailsPages/AllCategoriesDetailPages";
import AllCategoriesProductDetailPages from "./pages/detailsPages/AllCategoriesProductDetailPages";
import { CartContextProvider } from "./context/CartContext";
function App() {
  const [cart, setCart] = useState([]);

  // All categories Pages routes (Headphones, speakers, and earphones)
  const categoriesRoutes = newCategoriesName.map((category) => (
    <Route
      key={category}
      path={`/${category}`}
      element={<CategoriesPages categoryName={category} />}
    />
  ));

  // All Detail pages routes
  const productDetailsRoutes = data.map(({ id, slug, category }) => (
    <Route
      key={id}
      path={`/${slug}`}
      // path={`/${category}/:id`}
      element={<AllCategoriesProductDetailPages productId={id} />}
    />
  ));

  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home cart={cart} />} />
          {categoriesRoutes}
          {productDetailsRoutes}
          {/* <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones/:id" element={<XX99MarkTwoDetail />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} /> */}
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
