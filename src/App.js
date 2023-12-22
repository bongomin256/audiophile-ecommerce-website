import { useState } from "react";
import data from "./data.json";
//* Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
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
import CheckoutMain from "./pages/checkoutPage/CheckoutMain";
import Confirmation from "./pages/checkoutPage/Confirmation";
function App() {
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cartArrays"))
  // );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartArrays")) || []
  );

  // All categories Pages routes (Headphones, speakers, and earphones)
  const categoriesRoutes = newCategoriesName.map((category) => (
    <Route
      key={category}
      path={`/${category}`}
      element={<CategoriesPages cart={cart} categoryName={category} />}
    />
  ));

  // All Detail pages routes
  const productDetailsRoutes = data.map(({ id, slug, category }) => (
    <Route
      key={id}
      path={`/${slug}`}
      // path={`/${category}/:id`}
      element={
        <AllCategoriesProductDetailPages
          cart={cart}
          setCart={setCart}
          productId={id}
        />
      }
    />
  ));

  return (
    // <CartContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        {categoriesRoutes}
        {productDetailsRoutes}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutMain cart={cart} />} />
        {/* <Route
          path="/confirmation"
          element={<Confirmation cart={cart} setCart={setCart} />}
        /> */}
        {/* <Route path="/speakers" element={<Speakers />} /> */}
        {/* <Route path="/earphones" element={<Earphones />} /> */}
      </Routes>
    </Router>
    // </CartContextProvider>
  );
}

export default App;
