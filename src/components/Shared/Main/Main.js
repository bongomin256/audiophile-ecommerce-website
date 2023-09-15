import { useState, useEffect } from "react";
import Footor from "./Footer/Footor";
import Nav from "./Nav/Nav";
import ScrollToTop from "../ScrollToTop";

const MainLayout = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav size={cart.length} />
      <ScrollToTop />
      <main className="">{children}</main>
      <Footor />
    </>
  );
};

export default MainLayout;
