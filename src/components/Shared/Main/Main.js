import { useState } from "react";
import Footor from "./Footer/Footor";
import Nav from "./Nav/Nav";

const MainLayout = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav size={cart.length} />
      <main className="">{children}</main>
      <Footor />
    </>
  );
};

export default MainLayout;
