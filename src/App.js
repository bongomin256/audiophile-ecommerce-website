import { useState } from "react";
//* Pages
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
// import HeadphonesDetailPage from "./components/UiScences/HeadphonesDetails/XX99MarkTwoDetail";
import XX99MarkTwoDetail from "./components/UiScences/HeadphonesDetails/XX99MarkTwoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headphones from "./pages/Headphones";
// import { CartContextProvider } from "./context/CartContext/CartProvider";

import newCategoriesName from "./utils/productCategoryNames";
import CategoriesPages from "./components/Shared/allCategories/AllCategories";

function App() {
  const [cart, setCart] = useState([]);

  const categoriesRoutes = newCategoriesName.map((category) => (
    <Route
      key={category}
      path={`/${category}`}
      element={<CategoriesPages categoryName={category} />}
    />
  ));

  // const productsRoutes = data.map(({ id, slug }) => (
  //   <Route
  //     key={id}
  //     path={`/${slug}`}
  //     element={<ProductPages productId={id} />}
  //   />
  // ));

  return (
    // <CartContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        {categoriesRoutes}
        {/* <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones/:id" element={<XX99MarkTwoDetail />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} /> */}
      </Routes>
    </Router>
    // </CartContextProvider>
  );
}

export default App;
