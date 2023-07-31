import React from "react";
import Footor from "./Footer/Footor";
import Nav from "./Nav/Nav";

// import Overlay from "../Overlay/Overlay";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="">{children}</main>

      <Footor />
      {/* <Overlay /> */}
    </>
  );
};

export default MainLayout;
