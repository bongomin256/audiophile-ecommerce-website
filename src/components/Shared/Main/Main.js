import { useState, useEffect } from "react";
import Footor from "./Footer/Footor";
import Nav from "./Nav/Nav";
import ScrollToTop from "../ScrollToTop";

const MainLayout = ({ cart = [], children }) => {
  // const [cart, setCart] = useState([]);
  const cartSize = cart;

  return (
    <>
      <Nav cartSize={cartSize} />
      {/* <Nav /> */}
      <ScrollToTop />
      <main className="">{children}</main>
      <Footor />
    </>
  );
};

export default MainLayout;
